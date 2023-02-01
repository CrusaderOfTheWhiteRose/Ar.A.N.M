import { ApolloDriverConfig, ApolloDriver } from "@nestjs/apollo"
import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { MongooseModule } from "@nestjs/mongoose"
import "dotenv/config"
import { CardModule } from "./card/card.module"
import { Card, CardSchema } from "./card/card.shema"
import { UserModule } from "./user/user.module"
import { User, UserSchema } from "./user/user.shema"

@Module({
	imports: [
		CardModule,
		UserModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
			debug: true,
			playground: true,
			installSubscriptionHandlers: true,
			include: [UserModule, CardModule],
		}),
		MongooseModule.forFeature([{ name: Card.name , schema: CardSchema }]),
		MongooseModule.forFeature([{ name: User.name , schema: UserSchema }]),
		MongooseModule.forRoot(process.env.MONGODB),
	],
})
export class ApolloModule {}
