import { Component } from "@angular/core"
import { HomeRouteService } from "./home-route.component.service";

@Component({
	selector: "home-route",
	templateUrl: "./home-route.component.html",
	styles: [],
})
export class HomeRouteComponent {
	constructor(private HRCS: HomeRouteService) {}
}
