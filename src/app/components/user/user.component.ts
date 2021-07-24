import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usersArr:User[]=[];
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this.usersArr = this._userService.getUsersList()
  }

}
