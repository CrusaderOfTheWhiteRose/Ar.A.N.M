import { Inject } from "@nestjs/common"
import { Args, Query, Resolver } from "@nestjs/graphql"
//
import { Card } from "../card.type"
//
import { CardQueryService } from "../service/card.query.service"

@Resolver()
export class CardQueryResolver {
	//I really like to send all the code to services
	constructor(@Inject(CardQueryService) private cardService: CardQueryService) {}
	//Ask for all the cards
	@Query((returns) => [Card])
	async allCard() {
		return this.cardService.findAll()
	}
	//Ask for cards user wants to find
	@Query((returns) => [Card])
	async findCard(@Args("id") id: string, @Args("author") author: string, @Args("upper") upper: string, @Args("bottom") bottom: string) {
		return this.cardService.findCard(id, author, upper, bottom)
	}
}
