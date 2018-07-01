import {Owner} from '../owner/owner';

export interface Pet {
  id: number;
  birthDate: string;
  name: string;
  petType: string;
  owner: Owner;
}
