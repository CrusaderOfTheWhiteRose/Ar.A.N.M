import { Controller, Delete, Get, Inject, Headers, Post, Req, Res, UseGuards } from "@nestjs/common"
import { JsonWebTokenGuard } from "./json-web-token.guard"
import { JsonWebTokenService } from "./json-web-token.service"

@Controller("JWT")
export class JsonWebTokenController {
	constructor(@Inject(JsonWebTokenService) private JWTS: JsonWebTokenService) {}

	@Post("LogIn")
	@UseGuards(JsonWebTokenGuard)
	JWTLogIn(@Req() req: Request, @Res() res: Response) {
		this.JWTS.JWTLogIn(req, res)
	}

	@Get("Verify")
	@UseGuards(JsonWebTokenGuard)
	JWTVerify(@Req() req: Request, @Res() res: Response, @Headers() header: any) {
		this.JWTS.JWTVerify(req, res, header)
	}

	@Delete("LogOut")
	@UseGuards(JsonWebTokenGuard)
	JWTLogOut(@Req() req: Request, @Res() res: Response) {
		this.JWTS.JWTLogOut(req, res)
	}
}
