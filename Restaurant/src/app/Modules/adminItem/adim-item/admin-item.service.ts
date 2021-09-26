import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminItemService {
  data:any;
  message:any;
  constructor(private http: HttpClient) { }
  getInventory(obj:any){
    let url= environment.API_ENDPOINT +'/getInventory';
    return this.http.post(url, obj);
  }

  updateInventory(obj:any){
    let url = environment.API_ENDPOINT + "/updateInventory";
    return this.http.put(url, obj);
  }

  deleteInventory(obj:any){
    let url = environment.API_ENDPOINT + "/deleteInventory";
    return this.http.delete(obj);
  }
}
