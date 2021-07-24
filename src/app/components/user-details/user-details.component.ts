import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { Location } from '@angular/common';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  usersArr:User[]=[];
  singleUser:any;
  userid:number;

  localData:any=[];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.userid = +this._activatedRoute.snapshot.params.userid;
    if (this.userid) {
      this.getUser(this.userid)
    }
    
  }
  getUser(userid:number) {
    this.singleUser = this._userService.getUser(userid);
  }

  goBack() {
    this._location.back();
  }

  delete(userid:number){
    this._userService.deleteUser(userid);
    this._router.navigate(['/home'])
  }

}
