import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ItemPageComponent } from './modules/itemPage/item-page/item-page.component';
import { CheckoutPageComponent } from './modules/checkoutPage/checkout-page/checkout-page.component';
import { OrderPageComponent } from './modules/orderPage/order-page/order-page.component';
import { AdimItemComponent } from './Modules/adminItem/adim-item/adim-item.component';
import { PaymentPageComponent } from './modules/paymentPage/payment-page/payment-page.component';
import { CardPaymentComponent } from './modules/cardPayment/card-payment/card-payment.component';
import { LoginPageComponent } from './modules/loginPage/login-page/login-page.component';
import { ProfilePageComponent } from './modules/profilePage/profile-page/profile-page.component';
import { AdminLoginComponent } from './modules/adminLogin/admin-login/admin-login.component';
import { ForgetPasswordComponent } from './modules/forget-password/forget-password.component';
import { FogetPasswordComponent } from './modules/forgetPassword/foget-password/foget-password.component';
import { NewPasswordComponent } from './modules/newPassword/new-password/new-password.component';
import { SignupPageComponent } from './modules/signupPage/signup-page/signup-page.component';

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
    ForgetPasswordComponent,
    FogetPasswordComponent,
    NewPasswordComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
