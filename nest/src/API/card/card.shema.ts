import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type CardDocument = HydratedDocument<Card>

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
	reported: string
}
export const CardSchema = SchemaFactory.createForClass(Card)
