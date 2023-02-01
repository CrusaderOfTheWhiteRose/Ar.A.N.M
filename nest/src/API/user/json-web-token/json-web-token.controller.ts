import { Controller, Delete, Get, Inject, Headers, Post, Req, Res, UseGuards } from "@nestjs/common"
//
import { JsonWebTokenGuard } from "./json-web-token.guard"
import { JsonWebTokenService } from "./json-web-token.service"

@Controller("JWT")
export class JsonWebTokenController {
	//Check this out for the functions P.S. Do not write nothing exept decorators and calls in the controller
	constructor(@Inject(JsonWebTokenService) private JWTS: JsonWebTokenService) {}

	@Post("LogIn")
	//Its just runs the guard script every time somebody is to smt
	@UseGuards(JsonWebTokenGuard)
	JWTLogIn(@Req() req: Request, @Res() res: Response) {
		this.JWTS.JWTLogIn(req, res)
	}

	@Get("Verify")
	//Its just runs the guard script every time somebody is to smt
	@UseGuards(JsonWebTokenGuard)
	JWTVerify(@Req() req: Request, @Res() res: Response, @Headers() header: any) {
		this.JWTS.JWTVerify(req, res, header)
	}

	@Delete("LogOut")
	//Its just runs the guard script every time somebody is to smt
	@UseGuards(JsonWebTokenGuard)
	JWTLogOut(@Req() req: Request, @Res() res: Response) {
		this.JWTS.JWTLogOut(req, res)
	}
}
