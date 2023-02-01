import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
//
import { Card, CardSchema } from "./card.shema"
//
import { CardMutationResolver } from "./resolver/card.mutation.resolver"
import { CardQueryResolver } from "./resolver/card.query.resolver"
import { CardMutationService } from "./service/card.mutation.service"
import { CardQueryService } from "./service/card.query.service"

@Module({
	//Its to connect for mongodb
	imports: [MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }])],
	//All the things for card's crud
	providers: [CardQueryService, CardMutationService, CardMutationResolver, CardQueryResolver],
})
export class CardModule {}
