import { ObjectType, Field, ID, InputType } from "@nestjs/graphql"

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

	@Field()
	permission: boolean
}

@InputType()
export class SignInUser {
	@Field()
	name: string

	@Field()
	email: string

	@Field()
	password: string
}
