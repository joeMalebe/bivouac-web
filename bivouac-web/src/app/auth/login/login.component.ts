import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    readonly authService: AuthService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required],
    });
  }
  submit() {
    if (this.loginForm.invalid) return;
    let email = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;
    this.authService.login(email, password);
    this.router.navigate(['dashboard']);
  }

  isShowPassword: boolean = false;
}
