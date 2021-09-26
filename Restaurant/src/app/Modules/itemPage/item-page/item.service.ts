import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }
  getItems(obj:any){
    var data;
    let url= environment.API_ENDPOINT + "/getItems";
    return this.http.post(url, obj);
  }
}