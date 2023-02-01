import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { ApolloModule } from "./API/apollo.module"

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true }), ApolloModule],
})
export class AppModule {}
