import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  authenticateUser(obj:any){
    let url = environment.API_ENDPOINT + "/getUserDetail";
    var data;
    this.http.post(url, obj).subscribe((res)=>{
      if(res.message == "No record found"){
        data = false;
      }else{
        data = res.data._id;
      }
    });
    return data;
  }
}
