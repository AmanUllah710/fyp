import { FrontComponent } from './home/front/front.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddmedicineComponent } from './home/addmedicine/addmedicine.component';
import { SupplyComponent } from './home/supply/supply.component';
import { TrackComponent } from './home/track/track.component';
import { OrdersComponent } from './home/orders/orders.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login' ,component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: FrontComponent },
  { path: 'addmedicine', component: AddmedicineComponent },
  { path: 'supplymedicine', component: SupplyComponent },
  { path: 'trackmedicine', component: TrackComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
