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
    this.http.post(url, obj).subscribe((response)=>{
      if(response.data){
        this.data = response.data;
      }else{
        this.data = false;
      }
    })
  }

  updateInventory(obj:any){
    let url = environment.API_ENDPOINT + "/updateInventory";
    this.http.put(url, obj).subscribe((res)=>{
      if(res){
        this.message = true;
      }else{
        this.message = false;
      }
    });
    return this.message;
  }

  deleteInventory(obj:any){
    let url = environment.API_ENDPOINT + "/deleteInventory";
    this.http.delete(obj).subscribe((res)=>{
      if(res){
        this.message = true;
      }else{
        this.message = false;
      }
    });
    return this.message;
  }
}
