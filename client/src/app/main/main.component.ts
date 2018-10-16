import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";
import { Ticket } from "../ticketing/ticket";
import { GlobalConfig } from "../globalConfig";
import { Router } from '@angular/router';
import { User } from 'app/model/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private tickets: Array<Ticket>;
  private url = GlobalConfig.url;
  user = new User();

  constructor(private appService: AppService,
    private config: GlobalConfig,
    private router: Router) {
  }

  ngOnInit() {
    this.getUser();
    let self = this;
    setInterval(function () {
      self.getAllTickets();
    }, 10000);

  }

  getUser() {
    this.appService.getJwt(this.url + 'user').subscribe((res: any) => {
      this.user = res.result;
      localStorage.setItem('user', JSON.stringify(res));
    });
  }

  getAllTickets() {
    this.tickets = [];
    this.appService.getJwt(this.url + 'ticket').subscribe((res: any[]) => {
      if (res.length > 0) {
        this.tickets = res;
        for (let item of res) {
          if (item.readStatus == 'UNREAD' && this.user.post == 'admin') {
            this.config.alertAudio();
          }
        }
      }
    });
  }





}
