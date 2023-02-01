import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
	@Prop({ required: false })
	name: string

	@Prop()
	email: string

	@Prop()
	password: string

	@Prop({ required: false })
	permission: boolean
}
export const UserSchema = SchemaFactory.createForClass(User)
