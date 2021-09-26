import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminAddNewItemService {

  constructor(private http: HttpClient) { }

  addNewItem(obj:any){
    let url = environment.API_ENDPOINT + "/addInventory";
    return this.http.post(url, obj);
  }

}
