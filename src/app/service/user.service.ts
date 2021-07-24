import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  resumeData:User[] =[];
  usersArr:User[]=[];
  localData:any=[];

  constructor() { 
    
  }
  getUsersData() {
    this.localData = localStorage.getItem('users');
    this.usersArr = JSON.parse(this.localData);
    if (this.usersArr) {
      this.resumeData=this.usersArr;
    }
  }

  createResume(resumeForm:User) {
    this.resumeData.push(resumeForm)
    localStorage.setItem('users', JSON.stringify(this.resumeData));
  }

  getUser(id:number){
    this.localData = localStorage.getItem('users');
    this.usersArr = JSON.parse(this.localData);
    return this.usersArr[id - 1];
  }

  getUsersList() {
    let users:any = localStorage.getItem('users');
    users = JSON.parse(users);
    return users;
  }

  deleteUser(id:number) {
    this.localData = localStorage.getItem('users');
    this.usersArr = JSON.parse(this.localData);
    this.usersArr.splice(id-1,1);
    localStorage.setItem('users', JSON.stringify(this.usersArr));
  }
}
