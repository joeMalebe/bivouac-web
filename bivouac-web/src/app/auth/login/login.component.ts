import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
checkBox: any;
showPassword(event:any) {
  this.isShowPassword = event.target.checked

  console.log(this.isShowPassword)
}
isShowPassword:boolean = false
}
