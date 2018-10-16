import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppService } from "../app.service";
import { GlobalConfig } from "../globalConfig";
import { User } from "./user";
import {
  FormGroup, FormArray, FormBuilder,
  Validators, ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  user = new User();
  url = GlobalConfig.url
  repassword: string;

  constructor(private config: GlobalConfig,
    private appService: AppService,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
  }

  registration() {

    if (!this.user.name ||
      !this.user.code ||
      !this.user.username ||
      !this.user.department ||
      !this.user.post ||
      !this.user.phone ||
      !this.user.password
    ) {
      return alert('وارد کردن همه موارد الزامی است!');
    }
    if(this.user.code.toString().length != 8){
      return alert('کد انحصاری را درست وارد کنید!')
    }

    if(this.user.password.length < 6){
      return alert('کلمه عبور باید بیش از 6 کاراکتر باشد')
    }
    if (!this.user.username.match(/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/)) {
      return alert('نام کاربری را ترکیبی از اعداد و حروف انگلیسی وارد بفرمایید')
    }
    if (this.user.password === this.repassword) {
      this.appService.postJwt(this.url + 'auth/register', this.user).subscribe((res: any) => {
        if (res.success) {
          localStorage.setItem('token', res.data.token);
          this.router.navigateByUrl('main');
        } else {
          alert(JSON.stringify(res.error, null, 4))
        }
      })
    } else {
      return alert('کلمه عبور وارد شده با هم برابر نیست!')
    }
  }


}
