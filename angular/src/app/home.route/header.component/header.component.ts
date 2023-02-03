import { Component } from '@angular/core';
import newPostButton from "./buttons/new-card"
import reportPostButton from "./buttons/report-card"
import switchStyleButton from "./buttons/switch-style"
import switchThemeButton from "./buttons/switch-theme"
import searchBar from "./buttons/search-bar"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
	newPostButton = newPostButton
	reportPostButton = reportPostButton
	switchStyleButton = switchStyleButton
	switchThemeButton = switchThemeButton
	searchBar = searchBar
}
