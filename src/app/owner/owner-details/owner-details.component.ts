import {Component, Input, OnInit} from '@angular/core';
import {Owner} from '../owner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {

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

  onAddNewPetClick() {
    this.showPetForm = true;
  }
}
