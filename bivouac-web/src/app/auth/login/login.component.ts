import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup
  constructor(private fb:FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:[undefined,Validators.required],
      password:[undefined,Validators.required],
    })
  }
submit() {
  if(this.loginForm.invalid) return
  alert("hooray")
}

isShowPassword:boolean = false
}
