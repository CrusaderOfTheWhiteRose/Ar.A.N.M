import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AngularReactModule } from "@bubblydoo/angular-react"
import { HttpClient, HttpClientModule } from "@angular/common/http"
//
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HomeRouteModule } from "./home.route/home-route.component.module"
import { logSignInRouteModule } from "./log-sign-in.route/log-sign-in-route.component.module"
import { NotFoundRouteModule } from "./not-found.route/not-found-route.component.module"
import { PolicyRulesRouteModule } from "./policy-rules.route/policy-rules-route.component.module"
//
import { AppService } from "./app.service"

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: "serverApp" }),
		HttpClientModule,

		AppRoutingModule,
		AngularReactModule,

		PolicyRulesRouteModule,
		NotFoundRouteModule,
		logSignInRouteModule,
		HomeRouteModule,
	],
	providers: [AppService, HttpClient],
	bootstrap: [AppComponent],
})
export class AppModule {}
