import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedUserService } from '../services/shared-user.service';
import { UserService } from '../services/user.service';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const ELEMENT_DATA: User[] = [
  {id: 1, name: 'Hydrogen', email:"ataide@gmail.com", password: 'H'},
  {id: 2, name: 'Helium', email:"ataide@gmail.com", password: 'He'},
  {id: 3, name: 'Lithium', email:"ataide@gmail.com", password: 'Li'},
  {id: 4, name: 'Beryllium', email:"ataide@gmail.com", password: 'Be'},
  {id: 5, name: 'Boron', email:"ataide@gmail.com", password: 'B'},
  {id: 6, name: 'Carbon', email:"ataide@gmail.com", password: 'C'},
  {id: 7, name: 'Nitrogen', email:"ataide@gmail.com", password: 'N'},
  {id: 8, name: 'Oxygen', email:"ataide@gmail.com", password: 'O'},
  {id: 9, name: 'Fluorine', email:"ataide@gmail.com", password: 'F'},
  {id: 10, name: 'Neon', email:"ataide@gmail.com", password: 'Ne'},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {  
  displayedColumns: string[] = ['id', 'name', 'email', 'password'];
  

  constructor(private userService: UserService, private router: Router, private sharedUser: SharedUserService) { }

  dataSource: any;
  ngOnInit(): void {
    this.userService.findAll().subscribe(
      (data) => {
        this.dataSource = data;
      },
      error => {

      }
    )

  }

  userDetails(user: User) {
    this.sharedUser.userToEdit = user;
    this.router.navigate(["/user-details"]);
  }

}
