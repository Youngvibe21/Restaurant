import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

// import { HomeComponent } from './modules/home/home/home.component';
import { HomeComponent } from './Modules/home/home/home.component';

import { ItemPageComponent } from './Modules/itemPage/item-page/item-page.component';
import { CheckoutPageComponent } from './Modules/checkoutPage/checkout-page/checkout-page.component';
import { OrderPageComponent } from './Modules/orderPage/order-page/order-page.component';
import { AdimItemComponent } from './Modules/adminItem/adim-item/adim-item.component';
import { PaymentPageComponent } from './Modules/paymentPage/payment-page/payment-page.component';
import { CardPaymentComponent } from './Modules/cardPayment/card-payment/card-payment.component';
import { LoginPageComponent } from './Modules/loginPage/login-page/login-page.component';
import { ProfilePageComponent } from './Modules/profilePage/profile-page/profile-page.component';
import { AdminLoginComponent } from './Modules/adminLogin/admin-login/admin-login.component';
//import { FogetPasswordComponent } from './Modules/forgetPassword/foget-password/foget-password.component';
import { FogetPasswordComponent } from './Modules/forgetPassword/foget-password/foget-password.component';
import { NewPasswordComponent } from './Modules/newPassword/new-password/new-password.component';
import { SignupPageComponent } from './Modules/signupPage/signup-page/signup-page.component';
import { AdminAddNewItemComponent } from './Modules/admin-add-new-item/admin-add-new-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemPageComponent,
    CheckoutPageComponent,
    OrderPageComponent,
    AdimItemComponent,
    PaymentPageComponent,
    CardPaymentComponent,
    LoginPageComponent,
    ProfilePageComponent,
    AdminLoginComponent,
    //ForgetPasswordComponent,
    FogetPasswordComponent,
    NewPasswordComponent,
    SignupPageComponent,
    AdminAddNewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
