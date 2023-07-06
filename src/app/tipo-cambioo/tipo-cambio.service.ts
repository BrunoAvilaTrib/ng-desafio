import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoCambioService {

  constructor(
    private httpClient: HttpClient,

    ) { }


  public getChange(formRequest: any): Observable<any> {
    return this.httpClient.post<any>( 'http://localhost:8080/api/tipo-cambio', formRequest);
  }

  public updateTypeChange(formRequest: any): Observable<any> {
    return this.httpClient.post<any>( 'http://localhost:8080/api/actualizar', formRequest);
  }

  public getList(): Observable<any> {
    return this.httpClient.get<any>( 'http://localhost:8080/api/listar');
  }

  public addList(): Observable<any> {
    return this.httpClient.get<any>( 'http://localhost:8080/api/agregar');
  }
}
