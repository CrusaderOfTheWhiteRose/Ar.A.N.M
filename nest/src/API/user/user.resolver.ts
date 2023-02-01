import { Inject } from "@nestjs/common"
import { Resolver, Mutation, Args, Query } from "@nestjs/graphql"
//
import { UserService } from "./user.service"
//
import { SignInUser, User } from "./user.type"

@Resolver()
export class UserResolver {
	//Do everything in service is the way
	constructor(@Inject(UserService) private userService: UserService) {}

	//Input user's data to sign in
	@Mutation((returns) => Boolean)
	async signIn(@Args("user") inputUser: SignInUser) {
		return this.userService.signIn(inputUser)
	}

	//Sends user's data back if email and password are right
	@Query((returns) => User)
	async logIn(@Args("email") email: string, @Args("password") password: string) {
		return this.userService.logIn(email, password)
	}
}
