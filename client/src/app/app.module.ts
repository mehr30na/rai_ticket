import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

import { AddTicketComponent } from './ticketing/add-ticket/add-ticket.component';
import { ListTicketComponent } from './ticketing/list-ticket/list-ticket.component';
import { UserListTicketComponent } from './ticketing/user-list-ticket/user-list-ticket.component';
import { AppService } from "./app.service";
import { GlobalConfig } from "./globalConfig";
import { TicketComponent } from './ticketing/ticket/ticket.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegistrationComponent,
    SidebarComponent,
    HeaderComponent,

    AddTicketComponent,
    ListTicketComponent,
    UserListTicketComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService, GlobalConfig, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
