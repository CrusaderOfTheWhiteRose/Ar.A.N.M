import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { JsonWebTokenModule } from "./json-web-token/json-web-token.module"
import { UserResolver } from "./user.resolver"
import { UserService } from "./user.service"
import { User, UserSchema } from "./user.shema"

@Module({
	imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), JsonWebTokenModule],
	providers: [UserService, UserResolver],
})
export class UserModule {}
