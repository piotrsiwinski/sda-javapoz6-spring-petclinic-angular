import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myform: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.myform = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl('', Validators.compose([
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ])),
      password: new FormControl(),
      city: new FormControl(),
      street: new FormControl(),
      country: new FormControl()
    });
  }

  sendForm() {

  }
}
