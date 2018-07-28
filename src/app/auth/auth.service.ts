import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) {
  }

  public isUserLogged(): boolean {
    return this.cookieService.check('USER_LOGGED');
  }

  public getLoggedUserData() {
    // todo: call PetClinic api here
    return {
      firstName: 'Jan',
      lastName: 'Kowalski',
      email: 'kowalski@petclinic.com'
    };
  }
}
