import {Component, OnInit} from '@angular/core';
import {Owner} from '../owner';
import {OwnerService} from '../owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Owner[];

  // referencja do wybranego ownera
  selectedOwner: Owner;

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit(): void {
    this.ownerService.getOwners().subscribe(
      owners => {
        console.log(JSON.stringify(owners));
        this.owners = owners;
      },
      error => console.log(JSON.stringify(error))
    );
  }

  onOwnerClicked(owner: Owner) {
    this.selectedOwner = owner;
  }

  createNewOwner() {
    const owner = {
      firstname: 'Piotr',
      lastname: 'Nowakowski',
      address: {
        city: 'Poznań',
        street: 'Półwiejska 42',
        country: 'Poland'
      }
    };
    this.ownerService.createOwner(owner)
    .subscribe(d => {
        console.log(JSON.stringify(d));
      },
      err => console.log(JSON.stringify(err)));

  }
}
