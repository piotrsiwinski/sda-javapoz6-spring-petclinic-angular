import {Address} from '../address/address';
import {Pet} from '../pet/pet';

export interface Owner {
  id: number;
  firstName: string;
  lastName: string;
  address: Address;
  pets: Pet[];
}
