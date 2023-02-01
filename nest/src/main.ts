//Server port is in .env file
import "dotenv/config"
//
import { NestFactory } from "@nestjs/core"
import * as bodyParser from "body-parser"
//
import { AppModule } from "./app.module"

async function bootstrap() {
	//CORS policy to block people who sends requests from places thats i do not like
	const app = await NestFactory.create(AppModule, { cors: { origin: process.env.CORS } })
	//Its too big, but who knows, maybe, somebody wants to upload a video?
	app.use(bodyParser.json({ limit: "50mb" }))
	app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }))
	//Start the server
	await app.listen(process.env.PORT)
}
bootstrap()
