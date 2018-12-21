import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserloginformComponent } from './components/userloginform/userloginform.component';
import {UserService} from './sharedservices/userservice/user.service';
import { SignupComponent } from './components/signup/signup.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'loginform', component: UserloginformComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'menu', component: MenubarComponent },
  { path: 'users', component: UsersComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserloginformComponent,
    SignupComponent,
    MenubarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
