import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) {
  }

  createPet(pet) {
    const httpOptions = {
      withCredentials: true,
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post('http://localhost:9000/api/v1/pet', pet, httpOptions);
  }

}

