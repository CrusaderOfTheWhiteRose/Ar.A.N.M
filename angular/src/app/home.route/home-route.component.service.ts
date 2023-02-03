import { Injectable, Inject } from "@angular/core"
import { AppService } from "../app.service"
import { HomeRouteModule } from "./home-route.component.module"

@Injectable({
	providedIn: HomeRouteModule,
})
export class HomeRouteService {
	constructor(@Inject(AppService) private AS: AppService) {}

	ShowPolicyRules = true

	ShowRulesAlert() {
		if (this.AS.user.name == ``) {
			this.ShowPolicyRules = false
		}
	}
	SendToRules() {
		this.ShowPolicyRules = false
		this.AS.CallRoute("PrivatePolicyRules")
	}
	LogOut() {
		this.ShowRulesAlert()
		this.AS.LogOut()
	}
}
