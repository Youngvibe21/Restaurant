import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(private router: Router, fb: FormBuilder ) { }
  signUpPayload = new FormGroup({
    userNmae: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    password: new FormControl(''),
    cnfPassword: new FormControl(''),
    acceptTerms: new FormControl('')

  });
  onClickSubmit(data: FormGroup){
    console.log("details",data.value);
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
