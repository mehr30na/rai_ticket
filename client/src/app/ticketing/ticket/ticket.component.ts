import {Component, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
import {GlobalConfig} from "../../globalConfig";
import {Ticket} from "../ticket";
import {ActivatedRoute, Router} from "@angular/router";
import {ReadStatus} from "../../enum/readStatus";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

   url = GlobalConfig.url;
   ticket = new Ticket();
   mode:string = '';

  constructor(private appService: AppService,
              private router: Router,
              private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.getTicket(res["id"]);
      this.mode = res["mode"]
    });
  }

  getTicket(id) {
    this.appService.getJwt(this.url + 'ticket/' + id).subscribe((res:Ticket) => {
      this.ticket = res;
      this.ticket.readStatus = ReadStatus.READ;
    });
  }

  update(e) {
    e.preventDefault();
    this.appService.updateJwt(this.url + 'ticket/' + this.ticket.id, this.ticket).subscribe(res => {
      if (res) {
        this.router.navigateByUrl('main/listticket');
      }
    });
  }


}
