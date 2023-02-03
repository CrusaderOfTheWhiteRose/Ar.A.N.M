import { Component } from "@angular/core"
import logSignInRoute from "./log-sign-in-route"

@Component({
	selector: "log-sign-in-route",
	template: `<react-wrapper [component]='logSignInRoute' />`,
})
export class LogSignInRouteComponent {
	logSignInRoute = logSignInRoute
}
