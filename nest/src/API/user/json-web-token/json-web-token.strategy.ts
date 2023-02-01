//Token secret is in .env files
import "dotenv/config"
//
import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"

@Injectable()
export class JsonWebTokenStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			//Use the token actual content
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			//If token had expired
			ignoreExpiration: true,
			//The secret
			secretOrKey: process.env.ATOKENSECRET,
		})
	}

	async ReMakeToken(Token: any) {
		//Write it down just for smt
		console.log(Token)
		//Sign it again, so user do not need to login again
		const TheToken = this.jwtService.sign(Token)
		//Send back
		return { TheToken: TheToken }
	}
}
