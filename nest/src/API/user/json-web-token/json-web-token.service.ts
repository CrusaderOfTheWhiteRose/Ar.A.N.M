import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { User, UserDocument } from "../user.shema"
import { JwtService } from "@nestjs/jwt"
import "dotenv/config"

@Injectable()
export class JsonWebTokenService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private jwtService: JwtService) {}

	ForbittenTokens: Array<string> = []

	ASecret: any = process.env.ATOKENSECRET

	JWTLogIn(req: any, res: any) {
		const TheToken = this.jwtService.sign(req.body)
		res.json({ TheToken: TheToken })
	}

	async JWTVerify(req: any, res: any, header: any) {
		const TheTokenHeader = header["authorization"]
		const TheToken = TheTokenHeader && TheTokenHeader.split(" ")[1]
		if (this.ForbittenTokens.includes(TheToken) || TheToken == null) {
			return null
		}
		this.jwtService
			.verify(TheToken)
			.then((User: any) => {
				req.User = User
			})
			.catch((err) => {
				return null
			})
		const email = req.User.email
		const theUser = await this.userModel.findOne({ email }).clone()
		const theUserName = theUser.name
		const theUserPermission = theUser.permission
		res.json({ name: theUserName, permission: theUserPermission })
	}

	JWTLogOut(req: any, res: any) {
		this.ForbittenTokens.push(req.body.TheToken)
		return null
	}
}
