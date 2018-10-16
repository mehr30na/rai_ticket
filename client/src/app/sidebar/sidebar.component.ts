import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/model/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user = new User();
  mode:string = '';
  constructor(private router: Router) {
  }

  ngOnInit() {
    // alert(JSON.parse(localStorage.getItem('user')).result.post)
    this.user  = JSON.parse(localStorage.getItem('user')).result;

  }

  ngAfterViewInit(){
    
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

}
