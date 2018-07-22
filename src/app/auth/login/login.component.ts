import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hasErrors = false;

  constructor(private loginService: LoginService, private router: Router, private authService: AuthService) {
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
      .subscribe((resp) => {
        this.authService.setUserLogged(true);
        this.router.navigate(['/']);
        },
          (err) => this.hasErrors = true
      );
  }
}
