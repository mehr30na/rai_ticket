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

  private url = GlobalConfig.url;
  private ticket = new Ticket();

  constructor(private appService: AppService,
              private router: Router,
              private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.getTicket(res["id"]);
    });
  }

  getTicket(id) {
    this.appService.getOne(this.url + 'ticket', id).subscribe((res:Ticket) => {
      this.ticket = res;
      this.ticket.readStatus = ReadStatus.READ;
      // this.appService.update(this.url+'ticket/'+ this.ticket.id , this.ticket);
    });
  }

  update(e) {
    e.preventDefault();
    this.appService.update(this.url + 'ticket/' + this.ticket.id, this.ticket).subscribe(_ => {
      if (_) {
        // alert('با موفقیت ذخیره گردید!');
        this.router.navigateByUrl('main/listticket');
      }
    });
  }


}
