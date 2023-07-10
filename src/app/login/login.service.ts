import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_BASE  = 'http://localhost:8080/auth'

  constructor(
    private httpClient: HttpClient,

    ) { }


  public login(formRequest: any): Observable<any> {
    return this.httpClient.post<any>( `${this.API_BASE}/login`, formRequest);
  }


}
