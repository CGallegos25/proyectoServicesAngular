import { Component, OnInit } from '@angular/core';

import { UsersService } from '../service/users.service';
import { User } from '../interface/user';
import { PostUser } from '../interface/post-user';
import { UserFunctions } from '../models/userFunctions';
import { UserPost } from '../interface/user-post';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private userFunctions: UserFunctions
  ) { }

  listUser: User[] = [];
  postUser !: PostUser;

  ngOnInit(): void {
    this.getListUser();
  }

  getListUser(): void {
    this.usersService.getUser().subscribe( (response: User[] ) => {
      this.listUser = response;
    })
  }

  getPostById() : void {
    const id = 2;
    this.usersService.getUserById(id).subscribe( (response: PostUser) => {
      this.postUser = response;
    });
  }

  postUserP(): void {
    const resultSuma = this.userFunctions.getSuma(10 , 20);
    console.log(resultSuma);

    const postUser: UserPost = {
      userId:  110,
      title: 'Cristian',
      body: 'Israel'
    }

    this.usersService.postUser(postUser).subscribe( (response: PostUser) => {
      console.log(response);
    });
  }

  putUser(): void {
    const postUser: PostUser = {
      userId:  1,
      id: 1,
      title: 'Cristian',
      body: 'Angelo'
    }
    this.usersService.patchUser(postUser).subscribe( (response: PostUser) => {
      console.log(response);
    });
  }

  deleteUser(): void {
    this.usersService.deleteUser(10000).subscribe(response => {
      console.log(response);
    });

  }


}
