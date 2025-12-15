import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject(false);
  isLoggedIn$ = this._isLoggedIn$;

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
