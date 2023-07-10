import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthStore } from '../lib/store/auth.store';

@Injectable({
  providedIn: 'root'
})
export class TipoCambioService {

  API_BASE  = 'http://localhost:8080/exchangeHouse'

  constructor(
    private httpClient: HttpClient,
    private authStorage: AuthStore,

    ) { }


    private getHeaders(): HttpHeaders {
      // Obtener el token del LocalStorage
      const token = this.authStorage.getToken();

      // Crear los encabezados
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      return headers;
    }


  public getChange(formRequest: any): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.post<any>( `${this.API_BASE}/applyCurrencyChange`, formRequest , { headers });
  }

  public updateTypeChange(formRequest: any): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.post<any>( `${this.API_BASE}/updateCurrencyValues`, formRequest , { headers });
  }

  public getList(): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.get<any>(  `${this.API_BASE}/getList`, { headers });
  }

  public addList(): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.get<any>(  `${this.API_BASE}/addCurrencyValues`, { headers });
  }

  public addValueTolist(formRequest: any): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.post<any>(  `${this.API_BASE}/addCurrencyValues`, formRequest , { headers });
  }
}
