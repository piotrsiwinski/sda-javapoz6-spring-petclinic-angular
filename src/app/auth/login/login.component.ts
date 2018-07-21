import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ])),
      password: new FormControl()
    });
  }

  sendLoginForm() {
    this.loginService
      .doLogin(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((resp) => console.log('user logged in'),
          (err) => console.log(JSON.stringify(err))
      );
  }
}
