import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { CanActivate, Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(
    @Inject(LOCAL_STORAGE)  private storageService : StorageService,
    private router : Router
    ){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.storageService.has('user')){
     return true;
    }else{
      this.router.navigate([''])
    }
}
}
