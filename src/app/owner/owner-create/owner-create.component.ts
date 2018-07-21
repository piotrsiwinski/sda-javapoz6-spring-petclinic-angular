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
      firstName: new FormControl(),
      lastName: new FormControl(),
      city: new FormControl(),
      street: new FormControl(),
      country: new FormControl()
    });
  }

  createNewOwner(myform) {
    // console.log(JSON.stringify(this.myform.value))
    this.ownerService.createOwner(this.myform.value).subscribe(d => {
        console.log(JSON.stringify(d));
      },
      err => console.log(JSON.stringify(err)));

    this.router.navigate(['/owners']);

  }
}
