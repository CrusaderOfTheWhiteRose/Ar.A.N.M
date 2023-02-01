import { Inject } from "@nestjs/common"
import { Resolver } from "@nestjs/graphql"
import { UserService } from "./user.service"

@Resolver()
export class UserResolver {
	constructor(@Inject(UserService) private userService: UserService) {}
}
