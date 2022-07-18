import { Injectable } from '@angular/core';
import { UsersComponent } from './users/users.component';

export type User = {
  name: string;
  lastname: string;
  address: string;
  email: string;
};

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getUsers() {
    return [
      {
        name: 'Luca',
        lastname: 'CavalcaCieli',
        email: 'ajfnolasd@gmsl.cos',
        address: 'via S.S. 213 Piola',
      },
      {
        name: 'Gastani',
        lastname: 'Frinzi',
        email: 'qiweoifd@ahf.pol',
        address: 'Viale pascoli 92',
      },
    ];
  }

  constructor() {}
}
