import {Component, Input, OnInit} from '@angular/core';
import {Owner} from '../owner';
import {Router} from '@angular/router';
import {Pet} from "../../pet/pet";

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {
  pets: Pet[];
  selectedPet: Pet;

  @Input()
  owner: Owner;
  showPetForm = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onHideClick() {
    this.owner = null;
  }

  onPetClicked(pet: Pet) {
    this.selectedPet = pet;
  }

  onAddNewPetClick() {
    this.showPetForm = true;
  }
}
