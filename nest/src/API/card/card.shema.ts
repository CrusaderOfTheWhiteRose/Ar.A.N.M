import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

//This is just a document of "how to send data to mongo"
export type CardDocument = HydratedDocument<Card>

//This schema is for mongodb only!!!
@Schema()
export class Card {
	@Prop()
	author: string

	@Prop()
	time: string

	@Prop({ required: false })
	upper: string

	@Prop({ required: false })
	center: string

	@Prop({ required: false })
	bottom: string

	@Prop()
	fire: number

	@Prop({ required: false })
	arsons: string[]

	@Prop({ required: false })
	reported: string
}
//Directly connects to the db (look in module) P.S. I know i am lazy
export const CardSchema = SchemaFactory.createForClass(Card)
