import { TestBed, async, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ApiService } from '../shared/api.service';
import { User } from './home.component.model';
import { FormBuilder } from '@angular/forms';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let apiService: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [ApiService, FormBuilder],
      imports: [HttpClientTestingModule],
    });
    apiService = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should GET users`, async(
    inject(
      [HttpTestingController, ApiService],
      (httpClient: HttpTestingController, apiService: ApiService) => {
        const User = [
          {
            id: 1,
            firstName: 'Lucas',
            lastName: 'Hernandez',
            birthdate: '20/20/2005',
          },
          {
            id: 2,
            firstName: 'Lucas',
            lastName: 'Hernandez',
            birthdate: '20/20/2005',
          },
          {
            id: 3,
            firstName: 'Lucas',
            lastName: 'Hernandez',
            birthdate: '20/20/2005',
          },
        ];

        apiService.getUser().subscribe((users: any) => {
          expect(users.length).toBe(3);
        });

        const req = httpMock.expectOne('http://localhost:3001/users/');
        expect(req.request.method).toBe('GET');

        req.flush(User);
        httpMock.verify();
      }
    )
  ));
  it('should call POST API to create a new user', () => {
    apiService.postUser(User).subscribe();

    const req = httpMock.expectOne({
      method: 'POST',
      url: 'http://localhost:3001/users/',
    });
    expect(req.request.body).toEqual(User);
  });
});
