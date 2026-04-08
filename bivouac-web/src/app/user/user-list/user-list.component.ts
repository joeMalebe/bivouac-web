import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  users:User[] = []
  constructor(private service:UserService) {}
  ngOnInit(): void {
    console.log("service call")
    this.service.getUsers().subscribe((data) => {
      this.users = JSON.parse(JSON.stringify(data))
      console.log(data)
    })
  }
}
