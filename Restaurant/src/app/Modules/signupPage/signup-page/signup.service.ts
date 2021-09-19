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
    var data;
    this.http.post(url, obj).subscribe((res:any)=>{
      if(res.message == "No record found"){
        data = this.addUser(obj);
      }else{
        data = "User already Exist!"
      }
    });
    return data;
  }

  addUser(obj:any){
    let url = environment.API_ENDPOINT + "/addUserDetail";
    this.http.post(url, obj).subscribe((res:any)=>{
      if(res.message = "Registration succesfull"){
        return res.message;
      }else{
        return "Technical Error"
      }
    })
  }
}
