import { Module } from "@nestjs/common"
import { APP_GUARD } from "@nestjs/core"
import { JwtModule } from "@nestjs/jwt"
import { MongooseModule } from "@nestjs/mongoose"
import { PassportModule } from "@nestjs/passport"
import { JsonWebTokenController } from "./json-web-token/json-web-token.controller"
import { JsonWebTokenGuard } from "./json-web-token/json-web-token.guard"
import { JsonWebTokenService } from "./json-web-token/json-web-token.service"
import { JsonWebTokenStrategy } from "./json-web-token/json-web-token.strategy"

import "dotenv/config"
import { UserResolver } from "./user.resolver"
import { UserService } from "./user.service"
import { User, UserSchema } from "./user.shema"

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'jwt' }),
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		JwtModule.register({
			secret: process.env.ATOKENSECRET,
			signOptions: { expiresIn: "2d" },
		})
	],
	controllers: [JsonWebTokenController],
	providers: [
		UserService, UserResolver,
		JsonWebTokenService,
		{
			provide: APP_GUARD,
			useClass: JsonWebTokenGuard,
		},
		JsonWebTokenStrategy
	],
})
export class UserModule {}
