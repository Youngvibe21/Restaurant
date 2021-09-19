import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {restaurant} from '../../../../interfaces/interface'
@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  message:any;
  constructor(private http: HttpClient) { }
  authenticateAdmin(obj:any){
    let url = environment.API_ENDPOINT + "/getAdminDetails";
    var data;
    this.http.post(url, obj).subscribe((res:any)=>{
      if(res.message == "No record found"){
        data = false;
      }else{
        data = res.data._id;
      }
    });
    return data;
  }

}
