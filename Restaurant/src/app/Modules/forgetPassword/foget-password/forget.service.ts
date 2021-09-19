import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {

  constructor(private http: HttpClient) { }
  getResetLink(obj:any){
      let url = environment.API_ENDPOINT + "/getUserDetail";
      var data;
      this.http.post(url, obj).subscribe((res)=>{
        if(res.message == "No record found"){
          data = "User Not Exist!";
        }else{
          data = this.sendLink(obj);
          if(data){
            data = "Link sent to your registerd mail "
          }else{
            data = "Technical Error !"
          }
        }
      });
      return data;
  }

  sendLink(obj:any){
    var result;
    let url = environment.API_ENDPOINT + "/getResetLink";
    this.http.post(url, obj).subscribe((res)=>{
      result = res.data.sent;
    });
    return result;
  }
}
