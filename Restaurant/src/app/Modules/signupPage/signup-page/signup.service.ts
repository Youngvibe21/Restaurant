import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  authenticateAndAddUser(obj:any){
    let url = environment.API_ENDPOINT + "/getUserDetail";
    return this.http.post(url, obj);
  }

  addUser(obj:any){
    let url = environment.API_ENDPOINT + "/addUserDetail";
    return this.http.post(url, obj);
  }
}
