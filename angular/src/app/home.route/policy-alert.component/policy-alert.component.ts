import { Component, Inject } from "@angular/core"
import { HomeRouteService } from "../home-route.component.service"

@Component({
	selector: "policy-alert",
	templateUrl: "./policy-alert.component.html",
})
export class PolicyAlertComponent {
	constructor(@Inject(HomeRouteService) private HRS: HomeRouteService) {}
	SendToRules() {
		this.HRS.SendToRules()
	}
	ShowPolicyRules = true
	ngOnInit() {
		this.ShowPolicyRules = this.HRS.ShowPolicyRules
	}
}
