import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resumeData:User[] =[];
  usersArr:User[]=[];

  localData:any=[];
  resumeForm =  new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    introduction: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\[a-z]{2,4}')]),
    phone: new FormControl('',[Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10),Validators.maxLength(10)]),
    experience: new FormControl('',Validators.required),
    achievement: new FormControl('',Validators.required),
}) 
get f(){
    return this.resumeForm.controls;
}
  constructor(
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this._userService.getUsersData();
  }
  createResume() {
    if (!this.resumeForm.valid){
      return 
    }
    this._userService.createResume(this.resumeForm.value)
    this.resumeForm.reset();
    this._router.navigate(['/user'])
  }

}
