import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [BrowserModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() name: string = '';
  @Input() buttonType: 'primary' | 'secondary' = 'primary';
  @Output() buttonClick = new EventEmitter<void>();
  onButtonClick() {
    this.buttonClick.emit()
  }
}
