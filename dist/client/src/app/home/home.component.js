"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const forms_1 = require("@angular/forms");
const home_component_model_1 = require("./home.component.model");
const api_service_1 = require("../shared/api.service");
const home_createModel_1 = require("./home.createModel");
let HomeComponent = class HomeComponent {
    constructor(httpClient, formbuilder, api) {
        this.httpClient = httpClient;
        this.formbuilder = formbuilder;
        this.api = api;
        this.users = new home_component_model_1.User();
        this.createUser = new home_createModel_1.CreateUser();
        this.formValue = this.formbuilder.group({
            firstName: [''],
            lastName: [''],
            birthDate: [''],
        });
    }
    ngOnInit() {
        this.getAllUsers();
    }
    postUsers() {
        this.createUser.firstName = this.formValue.value.firstName;
        this.createUser.lastName = this.formValue.value.lastName;
        this.createUser.birthDate = this.formValue.value.birthDate;
        this.api.postUser(this.createUser).subscribe((res) => {
            console.log(res);
            alert('add success');
            const ref = document.getElementById('cancel');
            ref === null || ref === void 0 ? void 0 : ref.click();
            this.getAllUsers();
        }, (err) => {
            console.log(err);
        });
    }
    getAllUsers() {
        this.api.getUser().subscribe((res) => {
            this.userData = res.users;
        });
    }
    deleteUser(row) {
        this.api.deleteUser(row._id).subscribe((res) => {
            alert('employee deleted');
            this.getAllUsers();
        }, (err) => {
            console.log(err);
        });
    }
    onEdit(row) {
        this.users._id = row._id;
        this.formValue.controls['firstName'].setValue(row.firstName);
        this.formValue.controls['lastName'].setValue(row.lastName);
        this.formValue.controls['birthDate'].setValue(row.birthDate);
    }
    updateUsers() {
        this.users.firstName = this.formValue.value.firstName;
        this.users.lastName = this.formValue.value.lastName;
        this.users.birthDate = this.formValue.value.birthDate;
        this.api.updateUser(this.users, this.users._id).subscribe((res) => {
            alert('updated succesfully');
            const ref = document.getElementById('cancel');
            ref === null || ref === void 0 ? void 0 : ref.click();
            this.formValue.reset();
            this.getAllUsers();
        });
    }
};
HomeComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
    }),
    __metadata("design:paramtypes", [http_1.HttpClient,
        forms_1.FormBuilder,
        api_service_1.ApiService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map