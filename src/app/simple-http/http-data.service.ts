import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http:HttpClient) { }

  url = 'https://reqres.in/api/users?page=2';
  // url = 'https://jsonplaceholder.typicode.com/users';

  get(){
    return this.http.get(this.url);
  }

}
