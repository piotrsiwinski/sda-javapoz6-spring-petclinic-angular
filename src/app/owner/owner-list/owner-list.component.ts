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
  selectedOwner: Owner;

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit(): void {
    this.ownerService.getOwners().subscribe(
      owners => {
        this.owners = owners;
      },
      error => console.log(JSON.stringify(error))
    );
  }

  onOwnerClicked(owner: Owner) {
    this.selectedOwner = owner;
  }

}
