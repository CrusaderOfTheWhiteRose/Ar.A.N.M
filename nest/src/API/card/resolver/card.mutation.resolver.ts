import { Inject } from "@nestjs/common"
import { Resolver } from "@nestjs/graphql"
import { CardMutationService } from "../service/card.mutation.service"

@Resolver()
export class CardMutationResolver {
	constructor(@Inject(CardMutationService) private cardService: CardMutationService) {}
}