import { Inject } from "@nestjs/common"
import { Args, Mutation, Resolver } from "@nestjs/graphql"
import { InputCard } from "../card.type"
import { CardMutationService } from "../service/card.mutation.service"

@Resolver()
export class CardMutationResolver {
	constructor(@Inject(CardMutationService) private cardService: CardMutationService) {}

	@Mutation((returns) => Boolean)
	async createCard(@Args("create") inputCard: InputCard) {
		return this.cardService.Create(inputCard)
	}

	@Mutation((returns) => Boolean)
	async deleteCard(@Args("id") id: string) {
		return this.cardService.Delete(id)
	}

	@Mutation((returns) => Boolean)
	async updateCard(@Args("id") id: string, @Args("update") inputCard: InputCard) {
		return this.cardService.Update(id, inputCard)
	}

	@Mutation((returns) => Boolean)
	async reportCard(@Args("id") id: string, @Args("report") report: string) {
		return this.cardService.Report(id, report)
	}

	@Mutation((returns) => Boolean)
	async fireCard(@Args("id") id: string, @Args("fire") fire: boolean) {
		return this.cardService.Fire(id, fire)
	}
}
