import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  constructor(private router: Router, fb: FormBuilder) { }
  newPass = new FormGroup({
    newPass: new FormControl(''),
    cnfNewPass: new FormControl(''),
  });
  onClickSubmit(data: FormGroup){
    console.log("Logged successfully  !");
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }

}
