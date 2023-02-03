import { NgModule } from "@angular/core"
import { HomeRouteComponent } from "./home-route.component"
import { HeaderComponent } from "./header.component/header.component"
import { CardBoxComponent } from "./card-box.component/card-box.component"
import { PolicyAlertComponent } from "./policy-alert.component/policy-alert.component"
//
import { AngularReactModule } from "@bubblydoo/angular-react"
import { MatButtonModule } from "@angular/material/button"
import { CommonModule } from "@angular/common"
//
import { HomeRouteService } from "./home-route.component.service"

@NgModule({
	declarations: [HomeRouteComponent, HeaderComponent, CardBoxComponent, PolicyAlertComponent],
	imports: [AngularReactModule, MatButtonModule, CommonModule],
	providers: [HomeRouteService]
})
export class HomeRouteModule {}
