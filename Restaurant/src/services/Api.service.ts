import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  authenticateUser(obj: any){
    const url = environment.API_ENDPOINT + '/getUserDetail'
    return this.http.post(url, obj);

  }





}
