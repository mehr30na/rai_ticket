import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {AddTicketComponent} from "./ticketing/add-ticket/add-ticket.component";
import {ListTicketComponent} from "./ticketing/list-ticket/list-ticket.component";
import {UserListTicketComponent} from "./ticketing/user-list-ticket/user-list-ticket.component";
import {TicketComponent} from "./ticketing/ticket/ticket.component";
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent},

  {
    path: 'main', component: MainComponent, children: [
    {path: 'addticket', component: AddTicketComponent},
    {path: 'listticket', component: ListTicketComponent},
    {path: 'userlistticket', component: UserListTicketComponent},
    {path: 'ticket/:id', component: TicketComponent},
  ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
