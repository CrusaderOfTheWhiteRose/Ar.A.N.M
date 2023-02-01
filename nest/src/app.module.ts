import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { ApolloModule } from "./API/apollo.module"
import { ThrottlerModule } from '@nestjs/throttler'

@Module({
	imports: [
		ThrottlerModule.forRoot({
			ttl: 60,
			limit: 10,
		}),
		ConfigModule.forRoot({ isGlobal: true }),
		ApolloModule,
	],
})
export class AppModule {}
