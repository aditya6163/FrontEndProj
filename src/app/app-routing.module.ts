import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import {DoctorComponent} from './doctor/doctor.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'doctor',
    component:DoctorComponent
  },
  {
    path:'tandc',
    component:TermsAndConditionsComponent
  },
  {
    path:'appbooking',
    component:AppointmentBookingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [RegisterComponent]