
import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isAuth = false;
    constructor(private httpClient : HttpClient,
      @Inject(LOCAL_STORAGE) private storageService : StorageService){
    }
    signIn(user : User ){
        this.storageService.set('user',user)
        this.isAuth = true;
    }

    signOut(){
      this.isAuth= false;
      this.storageService.clear();
    }
    addUser(user : User){
        
    }
    isAuthenticated(){
      if(this.storageService.has('user')){
        return true;
      }else{
        return false;
      }
    }
}
