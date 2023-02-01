import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

//This is just a document of "how to send data to mongo"
export type UserDocument = HydratedDocument<User>

//This schema is for mongodb only!!!
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
//Directly connects to the db (look in module)
export const UserSchema = SchemaFactory.createForClass(User)
