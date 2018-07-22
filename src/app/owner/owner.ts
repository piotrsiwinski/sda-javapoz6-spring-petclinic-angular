import {Address} from '../address/address';
import {Pet} from '../pet/pet';
import {FormControl} from "@angular/forms";

export interface Owner {
  id: number;
  firstname: string;
  lastname: string;
  address: Address;
  pets: Pet[];
}
