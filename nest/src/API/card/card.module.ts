import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { Card, CardSchema } from "./card.shema"
import { CardMutationResolver } from "./resolver/card.mutation.resolver"
import { CardQueryResolver } from "./resolver/card.query.resolver"
import { CardMutationService } from "./service/card.mutation.service"
import { CardQueryService } from "./service/card.query.service"

@Module({
	imports: [MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }])],
	providers: [CardQueryService, CardMutationService, CardMutationResolver, CardQueryResolver],
})
export class CardModule {}
