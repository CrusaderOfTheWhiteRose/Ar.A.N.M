import { Module } from "@nestjs/common"
import { JsonWebTokenController } from "./json-web-token.controller"
import { JsonWebTokenGuard } from "./json-web-token.guard"
import { JsonWebTokenService } from "./json-web-token.service"

@Module({
	controllers: [JsonWebTokenController],
	providers: [JsonWebTokenService, JsonWebTokenGuard]
})
export class JsonWebTokenModule {}
