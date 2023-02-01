import { ObjectType, Field, ID, InputType } from "@nestjs/graphql"

//Data field that can be send by graphql (graphql output)
@ObjectType()
export class User {
	@Field((type) => ID)
	id: string

	@Field()
	name: string

	@Field()
	email: string

	@Field()
	password: string

	@Field({ nullable: true })
	permission: boolean
}

//Data field that can be send with graphql into server (graphql input)
@InputType()
export class SignInUser {
	@Field()
	name: string

	@Field()
	email: string

	@Field()
	password: string
}
