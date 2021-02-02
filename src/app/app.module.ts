import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {FormsModule} from '@angular/forms';
//import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'; 

import {DataService} from './data.service';
// import {LoginService} from './login-service.service';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { DoctorComponent } from './doctor/doctor.component';

import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
  //  RegisterComponent,
  routingComponents,
  LoginComponent,
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  BlogComponent,
  DoctorComponent,
  TermsAndConditionsComponent,
  AppointmentBookingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
