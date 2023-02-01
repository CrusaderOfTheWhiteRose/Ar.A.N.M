import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { UserDocument } from "./user.shema"
import { User, SignInUser } from "./user.type"

@Injectable()
export class UserService {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>,
	) {}

	async signIn(data: SignInUser): Promise<boolean> {
		const email = data.email
		const name = data.name
		if (await this.userModel.findOne({ email })) return null
		if (await this.userModel.findOne({ name })) return null
		this.userModel.insertMany([data])
		return true
	}

	async logIn(email: string, password: string): Promise<User> {
		try {
			if ((await (await this.userModel.findOne({ email })).password) == password) {
				return await this.userModel.findOne({ email })
			} else {
				return null
			}
		} catch {
			return null
		}
	}
}
