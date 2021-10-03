import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  data: any;
  amount:any;
  totalMrp:number=0;
  discountPer:any;
  discountAmt: any;
  couponDiscount: any;
  constructor(private router: Router) { 
    let nav = this.router.getCurrentNavigation();
    console.log(nav);
    this.data = nav?.extras.state?.payload;
    console.log("payload received ", this.data);
    this.orderSummary();
  }

  ngOnInit(): void {
  }
  orderSummary(){
    this.totalMrp = 0;
    this.data.forEach((element: any) => {
      console.log("cost ",element.cost)
      this.totalMrp += +element.cost; 
    });
    this.discountPer = 15;
    this.discountAmt = (this.totalMrp * this.discountPer)/100;
    this.couponDiscount = 10;
    this.amount = this.totalMrp - (this.discountAmt + this.couponDiscount);
  }
  submit(){
    console.log(this.amount);
      this.router.navigate(['/cardpayment'], { state: { payload: this.amount } })
  }

}
