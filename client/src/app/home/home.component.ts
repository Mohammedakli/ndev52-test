import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './home.component.model';
import { ApiService } from '../shared/api.service';
import { CreateUser } from './home.createModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: User = new User(); //créer un nouveau schema pour le /GET /EDIT /DELETE
  createUser: CreateUser = new CreateUser(); //créer un nouveau schema pour le /POST
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
      birthDate: [''],
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
  // Créer un utilisateur
  postUsers() {
    this.createUser.firstName = this.formValue.value.firstName;
    this.createUser.lastName = this.formValue.value.lastName;
    this.createUser.birthDate = this.formValue.value.birthDate;

    this.api.postUser(this.createUser).subscribe(
      (res) => {
        console.log(res);
        alert('add success');
        const ref = document.getElementById('cancel');
        ref?.click(); //fermer la Modal form après le submit

        this.getAllUsers(); //Appel de la fonction getAllusers pour retouner les derniers enregistrements sur la BDD
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //Afficher tous les utilisateurs
  getAllUsers() {
    this.api.getUser().subscribe((res) => {
      this.userData = res.users;
    });
  }

  // Supprimer un utilisateur
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
  //récuperation des donnéespar ID pour les afficher dans la Modal form
  onEdit(row: any) {
    this.users._id = row._id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['birthDate'].setValue(row.birthDate);
  }
  // modifier un utilisateur
  updateUsers() {
    this.users.firstName = this.formValue.value.firstName;
    this.users.lastName = this.formValue.value.lastName;
    this.users.birthDate = this.formValue.value.birthDate;
    this.api.updateUser(this.users, this.users._id).subscribe((res) => {
      alert('updated succesfully');
      const ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset(); //actualiser la Modal form
      this.getAllUsers();
    });
  }
}
