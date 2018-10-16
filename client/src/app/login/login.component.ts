import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from 'app/model/user';
import { GlobalConfig } from 'app/globalConfig';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  private url = GlobalConfig.url;

  constructor(
    private config: GlobalConfig,
    private appService: AppService,
    private router: Router
  ) {
  }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.loginCheck();
    }
  }

  loginCheck() {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('main');
    } else {
      let loginUser = new User();
      loginUser.username = this.user.username;
      loginUser.password = this.user.password;
      // alert(JSON.stringify(this.user));
      this.appService.postService(this.url + 'auth/login', loginUser).subscribe((res:any) => {
        if (res.success) {
          localStorage.setItem('token', res.data.token);
          this.router.navigateByUrl('main');
        } else {
          alert(JSON.stringify(res.error, null, 4))
        }
      });
    }
  }

}
