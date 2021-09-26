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
      return this.http.post(url, obj);
  }

  sendLink(obj:any){
    var result;
    let url = environment.API_ENDPOINT + "/getResetLink";
    return this.http.post(url, obj);
  }
}
