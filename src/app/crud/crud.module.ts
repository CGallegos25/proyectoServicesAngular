import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserFunctions } from './models/userFunctions';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UserFunctions
  ]
})
export class CrudModule { }
