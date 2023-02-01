import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
//
import { CardDocument } from "../card.shema"
import { Card } from "../card.type"

@Injectable()
export class CardQueryService {
	//Connecter with mongo
	constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}

	//Returns every single card
	async findAll(): Promise<Card[]> {
		return this.cardModel.find()
	}

	//Returns only one (a few) cards that was mentioned in search
	async findCard(id: string, author: string, upper: string, bottom: string): Promise<Card[]> {
		//If user search for id
		if (id != "") {
			//Its weird but its works just fine, believe me
			const ArraySimulator = []
			//Only one card can have such id
			ArraySimulator[0] = await this.cardModel.findById(id)
			//Return that one card
			return ArraySimulator
		}
		//If user search for bottom text
		else if (author != "") return this.cardModel.find({ author: author })
		//If user search for bottom text
		else if (upper != "") return this.cardModel.find({ upper: upper })
		//If user search for bottom text
		else if (bottom != "") return this.cardModel.find({ bottom: bottom })
		//Idk what can happen but if something will go wrong
		else return null
	}
}
