import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './home.component.model';
import { ApiService } from '../shared/api.service';
import { CreateUser } from './home.createModel';

// export class User {
//   constructor(
//     public _id: number,
//     public firstName: string = '',
//     public lastName: string = '',
//     public bithDate: string = ''
//   ) {}
// }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User = new User();
  createUser: CreateUser = new CreateUser();
  formValue!: FormGroup;
  userData!: any;
  constructor(
    private httpClient: HttpClient,
    private formbuilder: FormBuilder,
    private api: ApiService
  ) {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      bithDate: [''],
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  postUsers() {
    this.createUser.firstName = this.formValue.value.firstName;
    this.createUser.lastName = this.formValue.value.lastName;
    this.createUser.bithDate = this.formValue.value.bithDate;

    this.api.postUser(this.createUser).subscribe(
      (res) => {
        console.log(res);
        alert('add success');
        const ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset;
        this.getAllUsers();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getAllUsers() {
    this.api.getUser().subscribe((res) => {
      this.userData = res.users;
      console.log(res.users);
    });
  }
  deleteUser(row: any) {
    this.api.deleteUser(row._id).subscribe(
      (res) => {
        alert('employee deleted');
        this.getAllUsers();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onEdit(row: any) {
    this.users._id = row._id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['bithDate'].setValue(row.bithDate);
  }

  updateUsers() {
    this.users.firstName = this.formValue.value.firstName;
    this.users.lastName = this.formValue.value.lastName;
    this.users.bithDate = this.formValue.value.bithDate;
    this.api.updateUser(this.users, this.users._id).subscribe((res) => {
      alert('updated succesfully');
      const ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset;
      this.getAllUsers();
    });
  }
}
