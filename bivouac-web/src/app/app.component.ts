import { Component } from '@angular/core';
import { MenuService } from './menu/menuService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bivouac-web';

  constructor(readonly menuService:MenuService) {
    
  }
}
