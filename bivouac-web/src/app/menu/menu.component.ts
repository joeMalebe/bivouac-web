import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements AfterViewInit {
  isLoggedIn = false
  constructor(private readonly router: Router) {}
  ngAfterViewInit(): void {
    this.isLoggedIn = sessionStorage.getItem('user') ? true : false
  }

  navigate(destinationUrl:string){
    this.router.navigate([destinationUrl]);
    this.isMenuVisible = false;
  }

  logout() {
    sessionStorage.clear()
    this.navigate('')
  }

  @Input() isMenuVisible: boolean = false;
}
