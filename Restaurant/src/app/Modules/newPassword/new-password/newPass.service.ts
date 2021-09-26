import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewPassService {

  constructor(private http: HttpClient) { }
  updateUserDetails(obj:any){
    let url = environment.API_ENDPOINT + "/updateCreds";
    return this.http.put(url, obj);
  }
}
