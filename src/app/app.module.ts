import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ContactComponent } from './contact/contact.component';
import { FriendsComponent } from './friends/friends.component';
import { RouterModule } from '@angular/router';
import {HttpModule} from "@angular/http";
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FriendsComponent,
    SignupFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'contact', component:ContactComponent},
      {path:'friends', component:FriendsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
