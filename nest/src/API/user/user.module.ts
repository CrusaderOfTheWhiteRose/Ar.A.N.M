//Token secret is in the .env file
import "dotenv/config"
//
import { Module } from "@nestjs/common"
import { APP_GUARD } from "@nestjs/core"
import { JwtModule } from "@nestjs/jwt"
import { MongooseModule } from "@nestjs/mongoose"
import { PassportModule } from "@nestjs/passport"
//
import { UserResolver } from "./user.resolver"
import { UserService } from "./user.service"
import { User, UserSchema } from "./user.shema"
//
import { JsonWebTokenController } from "./json-web-token/json-web-token.controller"
import { JsonWebTokenGuard } from "./json-web-token/json-web-token.guard"
import { JsonWebTokenService } from "./json-web-token/json-web-token.service"
import { JsonWebTokenStrategy } from "./json-web-token/json-web-token.strategy"

@Module({
	//I know i could make module for jwt but i am too lazy to make an async module init
	imports: [
		//Checks is request's jwt good or bad
		PassportModule.register({ defaultStrategy: 'jwt' }),
		//Its to connect for mongodb
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		//Its just a token's config fule
		JwtModule.register({
			secret: process.env.ATOKENSECRET,
			signOptions: { expiresIn: "2d" },
		})
	],
	//This is for jwt input
	controllers: [JsonWebTokenController],
	providers: [
		//To handle graphql and db
		UserService, UserResolver,
		//This is for jwt
		JsonWebTokenService,
		{
			//Its just script which runs everytime someone send request
			provide: APP_GUARD,
			useClass: JsonWebTokenGuard,
		},
		//My special jwt validation, idk is server will use it
		JsonWebTokenStrategy
	],
})
export class UserModule {}
