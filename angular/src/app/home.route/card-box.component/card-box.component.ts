import { Component } from "@angular/core"
import cardBox from "./card-box"

@Component({
	selector: "card-box",
	template: `<react-wrapper [component]="cardBox"></react-wrapper>`,
})
export class CardBoxComponent {
	cardBox = cardBox
}
