import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserService} from './user.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
