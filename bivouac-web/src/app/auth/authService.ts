import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn = signal(false);
  readonly isLoggedIn = this._isLoggedIn.asReadonly()

  constructor() {
    this._isLoggedIn.set(
      sessionStorage.getItem('user') ? true : false
    );
  }

  login(email: string, password: string) {
    sessionStorage.setItem(
      'user',
      JSON.stringify({ email: email, password: password })
    );
    this._isLoggedIn.set(true);
  }

  logout() {
    sessionStorage.clear();
    this._isLoggedIn.set(false);
  }
}
