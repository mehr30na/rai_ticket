import {Component, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
import {GlobalConfig} from "../../globalConfig";
import {Ticket} from "../ticket";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {

  private tickets: Array<Ticket>;
  private url = GlobalConfig.url;


  constructor(private appService: AppService,
              private config: GlobalConfig,
              private router: Router,) {
  }

  ngOnInit() {
    this.getAllTickets();
  }

  onDelete(item) {
    this.appService.delete(this.url + 'ticket/' + item.id).subscribe(res => {
      if (res) {
        // alert('حذف با موفقیت انجام شد');
        this.getAllTickets();
      }
    });
  }

  getAllTickets() {
    this.tickets = [];
    this.appService.getAll(this.url + 'ticket').subscribe((res:Ticket[]) => {
      if (res.length > 0) {
        this.tickets = res;
      }
    });
  }

  viewAndEdit(item) {
    this.router.navigateByUrl('main/ticket/' + item.id);
  }

}
