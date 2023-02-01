import { ObjectType, Field, ID, InputType } from "@nestjs/graphql"

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

	@Field({ nullable: true })
	reported: string
}

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

	@Field({ nullable: true })
	reported: string
}
