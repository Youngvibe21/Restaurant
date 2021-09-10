import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


//const routes: Routes = [];
const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'adminLogin', component: AdminLoginComponent
  },
  {
    path: 'signUp', component: SignupPageComponent
  },
  {
    path: 'forget', component: FogetPasswordComponent
  },
  {
    path: 'newPass', component: NewPasswordComponent
  },
  {
    path: 'payment', component: PaymentPageComponent
  },
  {
    path: 'adminItem', component: AdimItemComponent
  },
  {
    path: 'userProfile', component: ProfilePageComponent
  },
  {
    path: 'checkout', component: CheckoutPageComponent
  },
  {
    path: 'cardpayment', component: CardPaymentComponent
  },
  
  
  {
    path: 'itemPage',
    component: ItemPageComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'checkoutPage', // child route path
        component: CheckoutPageComponent, // child route component that the router renders
      },
      {
        path: 'orderPage',
        component: OrderPageComponent, // another child route component that the router renders
      },
    ],
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
