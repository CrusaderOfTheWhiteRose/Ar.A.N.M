import { Controller, Delete, Get, Inject, Headers, Post, Req, Res, UseGuards } from "@nestjs/common"
//
import { JsonWebTokenService } from "./json-web-token.service"
import { JsonWebTokenStrategy } from './json-web-token.strategy'

@Controller("JWT")
export class JsonWebTokenController {
	//Check this out for the functions P.S. Do not write nothing exept decorators and calls in the controller
	constructor(@Inject(JsonWebTokenService) private JWTS: JsonWebTokenService) {}

	@Post("LogIn")
	//Its just runs the guard script every time somebody is to smt
	@UseGuards(JsonWebTokenStrategy)
	JWTLogIn(@Req() req: Request, @Res() res: Response) {
		this.JWTS.JWTLogIn(req, res)
	}

	@Get("Verify")
	//Its just runs the guard script every time somebody is to smt
	@UseGuards(JsonWebTokenStrategy)
	JWTVerify(@Req() req: Request, @Res() res: Response, @Headers() header: any) {
		this.JWTS.JWTVerify(req, res, header)
	}

	@Delete("LogOut")
	//Its just runs the guard script every time somebody is to smt
	@UseGuards(JsonWebTokenStrategy)
	JWTLogOut(@Headers() header: any) {
		this.JWTS.JWTLogOut(header)
	}
}
