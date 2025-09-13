import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
handleCick() {
  this.isMenuVisible != this.isMenuVisible
  console.log("clicked target and result is" + this.isMenuVisible)
}
@Input() isMenuVisible: boolean = true;

}
