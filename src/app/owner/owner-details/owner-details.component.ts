import {Component, Input, OnInit} from '@angular/core';
import {Owner} from '../owner';
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

  constructor() {
  }

  ngOnInit() {
  }

  onHideClick() {
    this.owner = null;
  }

  onPetClicked(pet: Pet) {
    this.selectedPet = pet;
  }
}
