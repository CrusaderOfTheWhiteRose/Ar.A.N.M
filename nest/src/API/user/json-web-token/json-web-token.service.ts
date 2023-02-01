import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { JwtService } from "@nestjs/jwt"
//
import { User, UserDocument } from "../user.shema"

@Injectable()
export class JsonWebTokenService {
	//To search upon users
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private jwtService: JwtService) {}
	//Tokens that wont be used ever again
	ForbittenTokens: Array<string> = []
	//To create and send token back
	JWTLogIn(req: any, res: any) {
		const TheToken = this.jwtService.sign(req.body)
		res.json({ TheToken: TheToken })
	}
	//Is it the real token?
	async JWTVerify(req: any, res: any, header: any) {
		//Take its header and check the actual token
		const TheTokenHeader = header["authorization"]
		const TheToken = TheTokenHeader && TheTokenHeader.split(" ")[1]
		//If there is no token or token is forbitten then return null
		if (this.ForbittenTokens.includes(TheToken) || TheToken == null) {
			return null
		}
		//Verify it for damage
		this.jwtService
			.verify(TheToken)
			//Then sets the request user as user email which token contains
			.then((User: any) => {
				req.User = User
			})
			//If it was damaged then retun null
			.catch((err) => {
				return null
			})
		//Takes the email to find
		const email = req.User.email
		//Find user with such email (do not use actual db but its clone)
		const theUser = await this.userModel.findOne({ email }).clone()
		//Sets variables to send back
		const theUserName = theUser.name
		const theUserPermission = theUser.permission
		//Sends them as json file
		res.json({ name: theUserName, permission: theUserPermission })
	}
	//Sends this token to forbitten until it expires
	JWTLogOut(req: any, res: any) {
		this.ForbittenTokens.push(req.body.TheToken)
		return null
	}
}
