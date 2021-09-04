import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor( private router: Router, fb: FormBuilder) { }
  loginPayload = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onClickSubmit(data: FormGroup){
    console.log("details",data.value);
    this.router.navigate(['/itemPage']);
  }
  ngOnInit(): void {
  }

}
