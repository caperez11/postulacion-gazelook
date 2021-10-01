import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './pages/login/login.component';

import { PortadaComponent } from './components/portada/portada.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    PortadaComponent,
    NavbarComponent,
    FormLoginComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
