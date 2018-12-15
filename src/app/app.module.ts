import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserloginformComponent } from './components/userloginform/userloginform.component';
import {UserService} from './sharedservices/user.service';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'loginform', component: UserloginformComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserloginformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
