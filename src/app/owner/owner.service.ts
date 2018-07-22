import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getOwners(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/v1/owners`, {withCredentials: true});
  }

  createOwner(owner) {
    const httpOptions = {
      withCredentials: true,
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post(`${this.apiUrl}/api/v1/owner`, owner, httpOptions);
  }
}
