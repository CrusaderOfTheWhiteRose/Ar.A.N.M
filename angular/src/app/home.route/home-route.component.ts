import { Component } from "@angular/core"

@Component({
	selector: "home-route",
	templateUrl: "./home-route.component.html",
	styles: [],
})
export class HomeRouteComponent {
	hideMissingImage(event: Event) {
		(event.target as HTMLImageElement).style.display = 'none';
	}
}
