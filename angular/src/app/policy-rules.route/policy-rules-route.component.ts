import { Component } from "@angular/core"
import policyRules from "./policy-rules-route"

@Component({
	selector: "policy-rules-route",
	template: `<react-wrapper [component]="policyRules"></react-wrapper>`,
})
export class PolicyRulesRouteComponent {
	policyRules = policyRules
}
