import { Inject } from "@nestjs/common"
import { Args, Query, Resolver } from "@nestjs/graphql"
import { Card } from "../card.type"
import { CardQueryService } from "../service/card.query.service"

@Resolver()
export class CardQueryResolver {
	constructor(@Inject(CardQueryService) private cardService: CardQueryService) {}

	@Query((returns) => Card)
	async oneCard(@Args("id", { type: () => String }) id: string) {
		return this.cardService.findOne(id)
	}

	@Query((returns) => [Card])
	async allCard() {
		return this.cardService.findAll()
	}

	@Query((returns) => [Card])
	async findCard(@Args("id") id: string, @Args("author") author: string, @Args("upper") upper: string, @Args("bottom") bottom: string) {
		return this.cardService.findCard(id, author, upper, bottom)
	}
}
