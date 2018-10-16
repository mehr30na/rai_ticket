import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";
import { GlobalConfig } from "../../globalConfig";
import { Ticket } from "../ticket";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {

  tickets: Array<Ticket>;
  url = GlobalConfig.url;


  constructor(private appService: AppService,
    private router: Router, ) {
  }

  ngOnInit() {
    this.getAllTickets();
  }

  onDelete(item) {
    this.appService.deleteJWT(this.url + 'ticket/' + item.id).subscribe(res => {
      if (res) {
        this.getAllTickets();
      }
    });
  }

  getAllTickets() {
    this.tickets = [];
    this.appService.getJwt(this.url + 'ticket').subscribe((res: Ticket[]) => {
      if (res.length > 0) {
        this.tickets = res;
      }
    });
  }

  viewAndEdit(item) {
    this.router.navigateByUrl('main/ticket/' + item.id+'/admin');
  }

}
