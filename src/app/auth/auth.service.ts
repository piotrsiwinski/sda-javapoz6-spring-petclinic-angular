import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isUserLoggedIn = false;

  constructor() { }


  public isUserLogged(): boolean {
    return this._isUserLoggedIn;
  }

  public setUserLogged(isLoggedIn: boolean) {
    this._isUserLoggedIn = isLoggedIn;
  }
}
