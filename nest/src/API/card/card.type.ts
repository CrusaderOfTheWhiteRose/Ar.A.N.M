import { ObjectType, Field, ID, InputType } from "@nestjs/graphql"

//Data field that can be send with graphql into server (graphql input)
@ObjectType()
export class Card {
	@Field((type) => ID)
	id: string

	@Field()
	author: string

	@Field()
	time: string

	@Field({ nullable: true })
	upper: string

	@Field({ nullable: true })
	center: string

	@Field({ nullable: true })
	bottom: string

	@Field()
	fire: number

	@Field(type => [String], { nullable: true })
	arsons: string[]

	@Field({ nullable: true })
	reported: string
}

//Data field that can be send by graphql (graphql output)
@InputType()
export class InputCard {
	@Field({ nullable: true })
	author: string

	@Field({ nullable: true })
	time: string

	@Field({ nullable: true })
	upper: string

	@Field({ nullable: true })
	center: string

	@Field({ nullable: true })
	bottom: string

	@Field({ nullable: true })
	fire: number

	@Field(type => [String], { nullable: true })
	arsons: string[]

	@Field({ nullable: true })
	reported: string
}
