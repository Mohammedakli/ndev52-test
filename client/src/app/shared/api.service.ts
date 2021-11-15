import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  //Appel de l'API avec la methode POST
  postUser(data: any) {
    return this.httpClient
      .post<any>(environment.backendUrl + 'users/', data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  //Appel de l'API avec la methode GET
  getUser() {
    return this.httpClient.get<any>(environment.backendUrl + 'users/').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  //Appel de l'API avec la methode PUT
  updateUser(data: any, _id: number) {
    return this.httpClient
      .put<any>(environment.backendUrl + 'users/' + _id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  //Appel de l'API avec la methode DELETE
  deleteUser(_id: number) {
    return this.httpClient
      .delete<any>(environment.backendUrl + 'users/' + _id)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
