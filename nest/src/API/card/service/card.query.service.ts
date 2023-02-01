import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CardDocument } from "../card.shema"
import { Card } from "../card.type"

@Injectable()
export class CardQueryService {
	constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}

	async findOne(id: string): Promise<Card> {
		return this.cardModel.findById(id)
	}

	async findAll(): Promise<Card[]> {
		return this.cardModel.find()
	}

	async findCard(id: string, author: string, upper: string, bottom: string): Promise<Card[]> {
		if (id != "") {
			const ArraySimulator = []
			ArraySimulator[0] = await this.cardModel.findById(id)
			return ArraySimulator
		} else if (author != "") {
			return this.cardModel.find({ author: author })
		} else if (upper != "") {
			return this.cardModel.find({ upper: upper })
		} else if (bottom != "") {
			return this.cardModel.find({ bottom: bottom })
		} else {
			return
		}
	}
}
