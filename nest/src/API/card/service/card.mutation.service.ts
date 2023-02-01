import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CardDocument } from "../card.shema"
import { Card, InputCard } from "../card.type"

@Injectable()
export class CardMutationService {
	constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}

	async Create(data: InputCard) {
		this.cardModel.insertMany([data])
		return true
	}
	async Delete(id: string): Promise<boolean> {
		await this.cardModel.findByIdAndDelete(id)
		return true
	}

	async Update(id: string, data: InputCard): Promise<boolean> {
		const DataBeforeUpdate = await this.cardModel.findById(id)
		if (data.upper == "") {
			data.upper = await DataBeforeUpdate.upper
		}
		if (data.center == "") {
			data.center = await DataBeforeUpdate.center
		}
		if (data.bottom == "") {
			data.bottom = await DataBeforeUpdate.bottom
		}
		await this.cardModel.findByIdAndUpdate(id, data)
		return true
	}

	async Report(id: string, report: string): Promise<boolean> {
		await this.cardModel.findByIdAndUpdate(id, { reported: report })
		return true
	}

	async Fire(id: string, fire: boolean): Promise<boolean> {
		const CorrectFireNumber = (await this.cardModel.findById(id)).fire
		if (fire == true) {
			await this.cardModel.findByIdAndUpdate(id, { fire: CorrectFireNumber + 1 })
		} else if (fire == false) {
			await this.cardModel.findByIdAndUpdate(id, { fire: CorrectFireNumber - 1 })
		}
		return true
	}
}
