import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/authService';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MenuService } from './menuService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [CommonModule],
  standalone:true,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  
  constructor(private readonly router: Router,readonly authService:AuthService, readonly menuService:MenuService) {}

  navigate(destinationUrl:string){
    this.router.navigate([destinationUrl]);
    this.menuService.close()
  }

  logout() {
    
    this.authService.logout()
    this.navigate('')
  }

  @Input() isMenuVisible: boolean = false;
}
