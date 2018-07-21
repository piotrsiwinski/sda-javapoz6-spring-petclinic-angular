import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userLogged: true;

  isUserLogged() {
    return this.userLogged;
  }
  constructor(private auth: AuthenticationService) { }

}

