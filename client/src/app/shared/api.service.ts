import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

//Lien API
const API_LINK = 'http://localhost:3000/users/';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  //Appel de l'API avec la methode POST
  postUser(data: any) {
    return this.httpClient.post<any>(API_LINK, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  //Appel de l'API avec la methode GET
  getUser() {
    return this.httpClient.get<any>(API_LINK).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  //Appel de l'API avec la methode PUT
  updateUser(data: any, _id: number) {
    return this.httpClient.put<any>(API_LINK + _id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  //Appel de l'API avec la methode DELETE
  deleteUser(_id: number) {
    return this.httpClient.delete<any>(API_LINK + _id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
