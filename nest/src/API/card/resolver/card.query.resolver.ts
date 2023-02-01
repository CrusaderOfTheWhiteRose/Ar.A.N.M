import { Inject } from "@nestjs/common"
import { Resolver } from "@nestjs/graphql"
import { CardQueryService } from "../service/card.query.service"

@Resolver()
export class CardQueryResolver {
	constructor(@Inject(CardQueryService) private cardService: CardQueryService) {}
}