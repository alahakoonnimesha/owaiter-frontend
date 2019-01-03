import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { UsersComponent } from './components/admin/users/users.component';
import {UserService} from './sharedservices/userservice/user.service';
import {AdminService} from './sharedservices/adminservice/admin.service';
import {AuthService} from './sharedservices/authservice/auth.service';
import {TableService} from './sharedservices/tableservice/table.service';
import {FooditemService} from './sharedservices/fooditemservice/fooditem.service';
import { SignupComponent } from './components/signup/signup.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HomeComponent } from './components/home/home.component';
import { DineinComponent } from './components/dinein/dinein.component';
import { LoginComponent } from './components/login/login.component';
import { GuestComponent } from './components/guest/guest.component';
import { OrderComponent } from './components/order/order.component';
import { ReservetableComponent } from './components/reservetable/reservetable.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './components/admin/adminhome/adminhome.component';
import { AdminmenubarComponent } from './components/admin/adminmenubar/adminmenubar.component';
import { MemberComponent } from './components/admin/member/member.component';
import { EditmenuComponent } from './components/admin/editmenu/editmenu.component';
import { BillComponent } from './components/admin/bill/bill.component';
import { TableComponent } from './components/admin/table/table.component';
import { AdminsignupComponent } from './components/admin/adminsignup/adminsignup.component';
import { FooditemsComponent } from './components/admin/fooditems/fooditems.component';


const appRoutes: Routes = [
  { path: '', component: DineinComponent },
 { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'menu', component: MenubarComponent },
  { path: 'users', component: UsersComponent },
  { path: 'dinein', component: DineinComponent },
  { path: 'guest', component: GuestComponent },
  { path: 'order', component: OrderComponent },
  { path: 'reserve', component: ReservetableComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'navbar', component: AdminmenubarComponent },
  { path: 'member', component: MemberComponent },
  { path: 'editmenu', component: EditmenuComponent },
  { path: 'table', component: TableComponent },
  { path: 'fooditem', component: FooditemsComponent },


];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SignupComponent,
    MenubarComponent,
    HomeComponent,
    DineinComponent,
    LoginComponent,
    GuestComponent,
    OrderComponent,
    ReservetableComponent,
    AdminloginComponent,
    AdminhomeComponent,
    AdminmenubarComponent,
    MemberComponent,
    EditmenuComponent,
    BillComponent,
    TableComponent,
    AdminsignupComponent,
    FooditemsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,TableService,FooditemService,AdminService,AuthService
            ],
        

  bootstrap: [AppComponent]
})
export class AppModule { 
}
