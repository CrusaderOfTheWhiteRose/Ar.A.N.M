import { Injectable, UnauthorizedException } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import "dotenv/config"


@Injectable()
export class JsonWebTokenStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: true,
			secretOrKey: process.env.ATOKENSECRET,
		})
	}

	async ReMakeToken(Token: any) {
		console.log(Token)
		const TheToken = this.jwtService.sign(Token)
		return { TheToken: TheToken }
	}
}
