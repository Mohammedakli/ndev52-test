import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  postUser(data: any) {
    return this.httpClient.post<any>('http://localhost:3000/users/', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getUser() {
    return this.httpClient.get<any>('http://localhost:3000/users/').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateUser(data: any, _id: number) {
    return this.httpClient
      .put<any>('http://localhost:3000/users/' + _id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteUser(_id: number) {
    return this.httpClient
      .delete<any>('http://localhost:3000/users/' + _id)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
