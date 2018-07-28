import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../../auth/register/register.service';
import {Owner} from '../../owner/owner';
import {OwnerService} from '../../owner/owner.service';
import {PetService} from '../pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  myform: FormGroup;
  hasErrors = false;
  @Input()
  owner: Owner;


  constructor(private registerService: RegisterService,
              private ownerService: OwnerService,
              private router: Router,
              private peteSrvice: PetService) {
  }

  ngOnInit() {
    this.myform = new FormGroup({
      owner: new FormControl(),
      birthDate: new FormControl(),
      name: new FormControl(),
      petType: new FormControl()
    });
  }

  sendForm() {
    const pet = this.myform.value;
    pet.owner = {
      id: this.owner.id
    };
    console.log(JSON.stringify(pet));

    this.peteSrvice.createPet(pet)
      .subscribe(d => {
        this.router.navigate(['/owners']);
      }, err => {
        this.hasErrors = true;
      });
  }
}

