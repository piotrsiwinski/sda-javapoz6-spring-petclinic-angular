import {Component, OnInit} from '@angular/core';
import {Login} from './login';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: Login = new Login('', '');
  myform: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.myform = new FormGroup({
      email: new FormControl("", Validators.compose([
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")
      ])),
      password: new FormControl()
    });
  }

  sendForm() {
    // console.log(JSON.stringify(this.loginForm));
    //todo Send data to backend
  }
}
