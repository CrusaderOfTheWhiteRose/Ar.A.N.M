//MongoDB url is in the .env file
import "dotenv/config"
//
import { ApolloDriverConfig, ApolloDriver } from "@nestjs/apollo"
import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { MongooseModule } from "@nestjs/mongoose"
//
import { CardModule } from "./card/card.module"
import { UserModule } from "./user/user.module"

@Module({
	imports: [
		//To handle all the things you would to do with cards
		CardModule,
		//Delete the line if you do not want somebody to use this app
		UserModule,
		//I will let it be in debug mode
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
			debug: true,
			playground: true,
			installSubscriptionHandlers: true,
			include: [UserModule, CardModule],
		}),
		//Here is from where MongoDB connects
		MongooseModule.forRoot(process.env.MONGODB),
	],
})
export class ApolloModule {}
