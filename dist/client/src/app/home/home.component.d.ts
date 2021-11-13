import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './home.component.model';
import { ApiService } from '../shared/api.service';
import { CreateUser } from './home.createModel';
export declare class HomeComponent implements OnInit {
    private httpClient;
    private formbuilder;
    private api;
    users: User;
    createUser: CreateUser;
    formValue: FormGroup;
    userData: any;
    constructor(httpClient: HttpClient, formbuilder: FormBuilder, api: ApiService);
    ngOnInit(): void;
    postUsers(): void;
    getAllUsers(): void;
    deleteUser(row: any): void;
    onEdit(row: any): void;
    updateUsers(): void;
}
