import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brs } from './brs.model';

@Injectable({
  providedIn: 'root'
})
export class BrsService {

  url = 'https://tranquil-caverns-87064.herokuapp.com/bugs';

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  get(): Observable<Array<Brs>> {
    return this.http.get<Array<Brs>>(this.url, { headers: this.headers });
  }
}
