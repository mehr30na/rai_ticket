import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { GlobalConfig } from 'app/globalConfig';
import { AppService } from 'app/app.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-user-list-ticket',
  templateUrl: './user-list-ticket.component.html',
  styleUrls: ['./user-list-ticket.component.css']
})
export class UserListTicketComponent implements OnInit {

  tickets: Array<Ticket>;
  url = GlobalConfig.url;

  constructor(private appService: AppService,
    private router: Router, ) {
  }

  ngOnInit() {
    this.getAllTickets();
  }

  getAllTickets() {
    this.tickets = [];
    this.appService.getJwt(this.url + 'myticket').subscribe((res: Ticket[]) => {
      if (res.length > 0) {
        this.tickets = res;
      }
    });
  }

  viewAndEdit(item) {

    this.router.navigateByUrl('main/ticket/' + item.id+'/user');
  }

}
