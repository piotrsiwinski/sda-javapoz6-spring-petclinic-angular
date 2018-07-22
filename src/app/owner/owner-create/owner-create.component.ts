import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OwnerService} from "../owner.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css']
})
export class OwnerCreateComponent implements OnInit {

  myform: FormGroup;

  constructor(private ownerService: OwnerService, private router: Router) {
  }

  ngOnInit() {
    this.myform = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      city: new FormControl(),
      street: new FormControl(),
      country: new FormControl()
    });
  }

  createNewOwner(myform) {
    const formData = this.myform.value;
    const requestData = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      address: {
        street: formData.street,
        city: formData.city,
        country: formData.country
      }
    };
    this.ownerService.createOwner(requestData).subscribe(d => {
        console.log(JSON.stringify(d));
        this.router.navigate(['/owners']);
      },
      err => console.log(JSON.stringify(err)));
  }
}
