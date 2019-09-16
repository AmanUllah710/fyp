import { CounterService } from './home/front/counter.service';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { FlexLayoutModule } from '@angular/flex-layout';
import { SignupComponent } from './auth/signup/signup.component';
import { FrontComponent } from './home/front/front.component';
import { SidenavComponent } from './home/sidenav/sidenav.component';
import { HeaderComponent } from './welcome/header/header.component';
import { FooterComponent } from './welcome/footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddmedicineComponent } from './home/addmedicine/addmedicine.component';
import { TrackComponent } from './home/track/track.component';
import { SupplyComponent } from './home/supply/supply.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrdersComponent } from './home/orders/orders.component';
import { HomefooterComponent } from './home/front/homefooter/homefooter.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FrontComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    AddmedicineComponent,
    TrackComponent,
    SupplyComponent,
    OrdersComponent,
    HomefooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
