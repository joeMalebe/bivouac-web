import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject(false);
  isLoggedIn$ = this._isLoggedIn$;

  constructor() {
    this.isLoggedIn$ = new BehaviorSubject(
      sessionStorage.getItem('user') ? true : false
    );
  }

  login(email: string, password: string) {
    sessionStorage.setItem(
      'user',
      JSON.stringify({ email: email, password: password })
    );
    this._isLoggedIn$.next(true);
  }

  isLoggedIn() {
    return this.isLoggedIn$;
  }

  logout() {
    sessionStorage.clear();
    this._isLoggedIn$.next(false);
  }
}
