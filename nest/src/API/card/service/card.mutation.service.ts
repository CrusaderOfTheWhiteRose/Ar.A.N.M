import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { CardDocument } from "../card.shema"
import { Card } from "../card.type"

@Injectable()
export class CardMutationService {
	constructor(@InjectModel(Card.name) private cardModel: Model<CardDocument>) {}
}
