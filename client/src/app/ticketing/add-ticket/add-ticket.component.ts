import { Component, OnInit } from '@angular/core';
import { GlobalConfig } from "../../globalConfig";
import { Ticket } from "../ticket";
import { AppService } from "../../app.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

   ticket = new Ticket();
   url = GlobalConfig.url;

  constructor(private config: GlobalConfig,
    private appService: AppService,
    private router: Router) {
  }

  ngOnInit() {
  }

  addTicket(ticket){
    console.log(ticket);
    this.appService.postJwt(this.url + 'ticket', this.ticket).subscribe(() => {
      this.router.navigateByUrl('main');
      // this.config.alertAudio();
    }, error => {
      alert(JSON.stringify(error));
    });
  }


}
