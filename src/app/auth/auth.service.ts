import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isUserLoggedIn = false;

  constructor() { }


  public isUserLogged(): Boolean {
    return this._isUserLoggedIn;
  }

  public setUserLogged(isLoggedIn: Boolean) {
    this._isUserLoggedIn = isLoggedIn;
  }
}
