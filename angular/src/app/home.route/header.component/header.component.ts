import { Component } from "@angular/core"
import newCardButton from "./buttons/new-card"
import reportCardButton from "./buttons/report-card"
import switchStyleButton from "./buttons/switch-style"
import switchThemeButton from "./buttons/switch-theme"
import searchButton from "./buttons/search-button"

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
})
export class HeaderComponent {
	newCardButton = newCardButton
	reportCardButton = reportCardButton
	switchStyleButton = switchStyleButton
	switchThemeButton = switchThemeButton
	searchButton = searchButton
}
