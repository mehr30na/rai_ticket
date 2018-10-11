import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";
import { Ticket } from "../ticketing/ticket";
import { GlobalConfig } from "../globalConfig";
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private tickets: Array<Ticket>;
  private url = GlobalConfig.url;

  constructor(private appService: AppService,
    private config: GlobalConfig, 
    private router: Router) {
  }

  ngOnInit() {
    let self = this;
    setInterval(function () {
      self.getAllTickets();
    }, 10000);
    this.appService.getJwt(this.url + 'user').subscribe(res=>{
      // alert(JSON.stringify(res));
    });
  }

  getAllTickets() {
    this.tickets = [];
    this.appService.getAll(this.url + 'ticket').subscribe((res:any[]) => {
      if (res.length > 0) {
        this.tickets = res;
        for (let item of res) {
          if (item.readStatus == 'UNREAD') {
            this.config.alertAudio();
          }
        }
      }
    });
  }


 


}
