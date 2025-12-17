import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MenuService } from '../menu/menuService';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  isMenuVisible: any;

  constructor(readonly menuService: MenuService) {}
}
