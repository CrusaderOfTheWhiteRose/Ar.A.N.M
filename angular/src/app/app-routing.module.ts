import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRouteComponent } from './home.route/home-route.component';
import { LogSignInRouteComponent } from './log-sign-in.route/log-sign-in-route.component';
import { NotFoundRouteComponent } from './not-found.route/not-found-route.component';
import { PolicyRulesRouteComponent } from './policy-rules.route/policy-rules-route.component';

const routes: Routes = [
	{
		path: "",
		component: HomeRouteComponent,
	},
	{
		path: "Log-Sign-In",
		component: LogSignInRouteComponent,
	},
	{
		path: "Private-Policy-Rules",
		component: PolicyRulesRouteComponent,
	},
	{
		path: "**",
		pathMatch: "full",
		component: NotFoundRouteComponent,
	},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
