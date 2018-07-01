import {Component, OnInit} from '@angular/core';
import {Owner} from '../owner';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Owner[] = [
    {
      id: 1,
      firstName: 'Jan',
      lastName: 'Kowalski',
      address: {
        street: 'Półwiejska 42',
        city: 'Poznań',
        postalcode: '61-229',
        country: 'Poland'
      },
      pets: [{id: 1, name: 'Azor', birthDate: '2017-05-12'}]
    } as Owner,
    {
      id: 2,
      firstName: 'Adam',
      lastName: 'Nowak',
      address: {
        street: 'Wrocławska 42',
        city: 'Poznań',
        postalcode: '61-230',
        country: 'Poland'
      },
      pets: [{id: 2, name: 'Puszek', birthDate: '2018-05-12'}]
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }
}
