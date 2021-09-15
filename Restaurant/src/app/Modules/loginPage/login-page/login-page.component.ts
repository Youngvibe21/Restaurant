import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from '../../../../services/Api.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor( private router: Router, fb: FormBuilder, private apiService: ApiService) { }
  loginPayload = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onClickSubmit(data: FormGroup){
    console.log("details",data.value);
    this.apiService.authenticateUser(data.value).subscribe((res: any)=>{
      if(res){
        console.warn("response ",res);
        this.router.navigate(['/itemPage']);

      }
    })
  }
  ngOnInit(): void {
  }

}
