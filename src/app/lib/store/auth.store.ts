import { Injectable } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStore {

  public isAuthenticated(): boolean{
    return this.getToken() ? true : false;
  }

  public setToken(token: string): void {
    UtilService.almacenamiento.guardarElemento('session', 'AuthToken' , token);
  }

  public getToken(): string {
    return UtilService.almacenamiento.obtenerElemento('session', 'AuthToken');
  }

}
