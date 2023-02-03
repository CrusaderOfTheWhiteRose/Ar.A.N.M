import { Component, Inject } from "@angular/core"
import newCardButton from "./buttons/new-card"
import reportCardButton from "./buttons/report-card"
import switchStyleButton from "./buttons/switch-style"
import switchThemeButton from "./buttons/switch-theme"
import searchButton from "./buttons/search-button"
import { AppService } from "src/app/app.service"

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
	constructor(@Inject(AppService) public AS: AppService) {}
	// (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
	magicNumber = 0
	misterMagic = ["`(*>﹏<*)′", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "o((>ω< ))o", "(ﾉ*ФωФ)ﾉ", "щ(ʘ╻ʘ)щ"]
	changeWizardo() {
		if (this.magicNumber >= 4) this.magicNumber = 0
		else this.magicNumber++
	}
}
