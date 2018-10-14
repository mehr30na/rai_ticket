import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "../app.service";
import {GlobalConfig} from "../globalConfig";
import {User} from "./user";
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


   user = new User();
   url = GlobalConfig.url
   repassword: number;
  regForm: FormGroup;

  constructor(private config: GlobalConfig,
              private appService: AppService,
              private fb: FormBuilder,
              private router: Router) {


    this.regForm = fb.group({
      'name': [null, Validators.required],
      'code': [null, Validators.required],
      'username': [null, Validators.required],
      'section': [null, Validators.required],
      'post': [null, Validators.required],
      'phone': [null, Validators.required],
      'password': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  register(e) {
    e.preventDefault();
    alert(JSON.stringify(this.user, null, 8));
    // this.appService.save(this.url + 'user', this.ticket)
  }

}
