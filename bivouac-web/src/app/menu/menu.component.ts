import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
constructor(private readonly router:Router){}

  navigateToLogin() {
    this.router.navigate(['login'])
    this.isMenuVisible = false
}
handleCick() {
  this.isMenuVisible != this.isMenuVisible
}
@Input() isMenuVisible: boolean = false;

}
