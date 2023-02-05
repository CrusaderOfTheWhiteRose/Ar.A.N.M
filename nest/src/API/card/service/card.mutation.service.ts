import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
//
import { CardDocument } from "../card.shema"
import { Card, InputCard } from "../card.type"

@Injectable()
export class CardMutationService {
	//Connecter with mongo
	constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}
	//To create card
	async Create(data: InputCard) {
		//Just creates (insert) card
		this.cardModel.insertMany([data])
		//Return that its done
		return true
	}
	//To delete card
	async Delete(id: string): Promise<boolean> {
		//Finds and deletes the card
		await this.cardModel.findByIdAndDelete(id)
		//Return that its done
		return true
	}
	//To update card
	async Update(id: string, data: InputCard): Promise<boolean> {
		//Find data the card had P.S. It could be better but idk, its looks much more predictable
		const DataBeforeUpdate = await this.cardModel.findById(id)
		//If user do not want to insert upper text, we use previos one
		if (data.upper == "") data.upper = await DataBeforeUpdate.upper
				//If user do not want to insert center image, we use previos one
		if (data.center == "") data.center = await DataBeforeUpdate.center
				//If user do not want to insert bottom text, we use previos one
		if (data.bottom == "") data.bottom = await DataBeforeUpdate.bottom
		//Find the card (again rly?) to update P.S. This is how it works ¯\_(ツ)_/¯
		await this.cardModel.findByIdAndUpdate(id, data)
		//Return that its done
		return true
	}
	//To report card
	async Report(id: string, report: string): Promise<boolean> {
		//Just add "report", thats it
		await this.cardModel.findByIdAndUpdate(id, { reported: report })
		//Return that its done
		return true
	}
	//To fire (like) card
	async Fire(id: string, fire: boolean, name: string): Promise<boolean> {
		//Take the number from card
		const CorrectFireNumber = (await this.cardModel.findById(id)).fire
		//If user "likes" it then add number and add him to list of ppl who liked this post, so they could not like it second time
		if (fire == false) await this.cardModel.findByIdAndUpdate(id, { fire: CorrectFireNumber + 1, $push: { arsons: name } })
		//Revert it back
		else if (fire == true) await this.cardModel.findByIdAndUpdate(id, { fire: CorrectFireNumber - 1, $pull: { arsons: name } })
		//Return that its done
		return true
	}
}
