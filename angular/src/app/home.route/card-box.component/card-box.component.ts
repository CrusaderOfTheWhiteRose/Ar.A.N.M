import { Component } from '@angular/core';
import cardBox from "./card-box"

@Component({
  selector: 'card-box',
  templateUrl: './card-box.component.html'
})
export class CardBoxComponent {
	cardBox = cardBox
}
