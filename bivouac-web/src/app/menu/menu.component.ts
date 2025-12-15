import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/authService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  isLoggedIn$ = this.authService.isLoggedIn$
  constructor(private readonly router: Router,readonly authService:AuthService) {}

  navigate(destinationUrl:string){
    this.router.navigate([destinationUrl]);
    this.isMenuVisible = false;
  }

  logout() {
    
    this.authService.logout()
    this.navigate('')
  }

  @Input() isMenuVisible: boolean = false;
}
