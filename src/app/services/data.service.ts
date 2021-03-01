import { Observable } from 'rxjs';
import { Client } from './../classes/client';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient) { }
  
  /* client */
  
  getClientById(id : string){  
    return this.httpClient.get(Config.BaseUrl + 'clients/' + id )
  }

  deleteClientById(id : string){
    return this.httpClient.delete(Config.BaseUrl + 'clients/delete/' + id )
  }

  getAllClients():Observable<any[]>{
    return this.httpClient.get<any[]>(Config.BaseUrl + 'clients');    
  }
  addClient(client : Client){
    return this.httpClient.post(Config.BaseUrl + 'clients',client);
  }
  updateClient(client : Client){
    
    return this.httpClient.post(Config.BaseUrl + '/client/modif',client);
  }

  /* fin client */

}
