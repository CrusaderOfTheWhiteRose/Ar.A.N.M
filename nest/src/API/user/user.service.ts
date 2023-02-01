import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
//
import { UserDocument } from "./user.shema"
//
import { User, SignInUser } from "./user.type"

@Injectable()
export class UserService {
	//Connecter with mongo
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	//What to do if user wants to sign in?
	async signIn(data: SignInUser): Promise<boolean> {
		//Gather its info P.S. I could skip this step but its just easier to read for me and computer
		const email = data.email
		const name = data.name
		//If there is such email or name then return nothing
		if (await this.userModel.findOne({ email })) return null
		if (await this.userModel.findOne({ name })) return null
		//If its original account then insert it into db
		this.userModel.insertMany([data])
		return true
	}

	//What to do if user wants to loh in?
	async logIn(email: string, password: string): Promise<User> {
		//It will shut up server if i check password for null, so it is as it is
		try {
			//if email with this passport exist then send back all the account info
			if ((await (await this.userModel.findOne({ email })).password) == password) return await this.userModel.findOne({ email })
			//If email have different password then
			else return null
		} catch {
			return null
		}
	}
}
