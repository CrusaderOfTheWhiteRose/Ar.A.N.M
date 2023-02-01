import { Inject } from "@nestjs/common"
import { Args, Mutation, Resolver } from "@nestjs/graphql"
//
import { InputCard } from "../card.type"
//
import { CardMutationService } from "../service/card.mutation.service"

@Resolver()
export class CardMutationResolver {
	//I do not want over 100 lines code file, so now you have 2 50 lines code files!
	constructor(@Inject(CardMutationService) private cardService: CardMutationService) {}
	//Its to create a card and return when its over
	@Mutation((returns) => Boolean)
	//inputCard is an object with props in it
	async createCard(@Args("create") inputCard: InputCard) {
		return this.cardService.Create(inputCard)
	}
	//Its to delete a card and return when its over
	@Mutation((returns) => Boolean)
	async deleteCard(@Args("id") id: string) {
		return this.cardService.Delete(id)
	}
	//Its to update a card and return when its over
	@Mutation((returns) => Boolean)
	//id for which card to update and inputCard is an object of variables to change
	async updateCard(@Args("id") id: string, @Args("update") inputCard: InputCard) {
		return this.cardService.Update(id, inputCard)
	}
	//Its to report a card and return when its over
	@Mutation((returns) => Boolean)
	async reportCard(@Args("id") id: string, @Args("report") report: string) {
		return this.cardService.Report(id, report)
	}
	//Its to fire a card and return when its over
	@Mutation((returns) => Boolean)
	//id is to what card user liked, fire is to did the user like or unlike and name is for mark user as one who liked the card
	async fireCard(@Args("id") id: string, @Args("fire") fire: boolean, @Args("name") name: string) {
		return this.cardService.Fire(id, fire, name)
	}
}
