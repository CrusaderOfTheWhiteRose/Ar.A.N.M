import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRouteModule } from './home.route/home-route.component.module';
import { logSignInRouteModule } from './log-sign-in.route/log-sign-in-route.component.module';
import { NotFoundRouteModule } from './not-found.route/not-found-route.component.module';
import { PolicyRulesRouteModule } from './policy-rules.route/policy-rules-route.component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	PolicyRulesRouteModule,
	NotFoundRouteModule,
	logSignInRouteModule,
	HomeRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
