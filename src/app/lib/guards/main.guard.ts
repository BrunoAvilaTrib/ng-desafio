import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, NavigationEnd, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, of} from 'rxjs';
import { AuthStore } from '../store/auth.store';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {

  name = 'Get Current Url Route Demo';
  currentRoute: string;

  constructor(
    private router: Router,
    private authStorage: AuthStore,
    private activatedRoute: ActivatedRoute,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  {
      if (this.authStorage.isAuthenticated()){
        return of(true);

      }
      else {
        this.router.navigate(['/login']);
        return of(false);
      }
  }
}
