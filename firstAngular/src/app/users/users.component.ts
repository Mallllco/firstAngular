import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userTableHeader = 'User Managed';
  users = [];

  constructor() {
    const userService = new UsersService();
    this.users = userService.getUsers();
  }

  ngOnInit(): void {}
}
