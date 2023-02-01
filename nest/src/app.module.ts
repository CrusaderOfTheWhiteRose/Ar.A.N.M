import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { ThrottlerModule } from '@nestjs/throttler'
//
import { ApolloModule } from "./API/apollo.module"

@Module({
	imports: [
		//Requests limit to make DDOS attacks less effective (the server will still be down)
		ThrottlerModule.forRoot({
			ttl: 60,
			limit: 10,
		}),
		//Config module, without it my whole server blow up
		ConfigModule.forRoot({ isGlobal: true }),
		//Its actully all the API
		ApolloModule,
	],
})
export class AppModule {}
