import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router, fb: FormBuilder) { }
  loginRestPayload = new FormGroup({
    restaurant: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onClickSubmit(data: FormGroup){
    console.log("details",data.value);
    this.router.navigate(['/adminItem']);
  }
  ngOnInit(): void {
  }

}
