import { Injectable, Inject } from "@angular/core"
import { AppService } from "../app.service"
import { HomeRouteModule } from "./home-route.component.module"

@Injectable()
export class HomeRouteService {
	constructor(@Inject(AppService) private AS: AppService) {}
	//If user did not check rules or is not logged in then show `the annoy box`
	ShowPolicyRules = true
	//Check ifs user logged in to show `the annoy box`
	ShowRulesAlert() {
		if (this.AS.user.name == ``) {
			this.ShowPolicyRules = false
		}
	}
	//Send user to rules and sets that user have seen it
	SendToRules() {
		this.ShowPolicyRules = false
		this.AS.CallRoute("PrivatePolicyRules")
	}
}
