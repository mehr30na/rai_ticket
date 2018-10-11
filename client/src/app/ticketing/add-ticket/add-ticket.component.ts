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

  private ticket = new Ticket();
  private url = GlobalConfig.url;

  constructor(private config: GlobalConfig,
    private appService: AppService,
    private router: Router) {
  }

  ngOnInit() {
  }


  onAddSubmit(e) {

    e.preventDefault();
    console.log(this.ticket);

    // let $data = JSON.parse(JSON.stringify(this.ticket));


    this.ticket.user_id = 5412;
    this.ticket.response = 'DEFAULT';
    // console.log($data);
    this.appService.save(this.url + 'ticket', this.ticket).subscribe(() => {
      // alert('با موفقیت ذخیره شد');
      this.router.navigateByUrl('main');
      this.config.alertAudio();
    }, error => {
      alert(error);
    });

  }

}
