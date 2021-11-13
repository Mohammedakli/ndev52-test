import {
  TestBed,
  ComponentFixture,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { ApiService } from '../shared/api.service';
import { User } from './home.component.model';
import { of } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { delay } from 'rxjs/operators';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiService: ApiService;
  let user: User;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [ApiService, FormBuilder],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [ApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    apiService = TestBed.get(ApiService);
    user = new User();
  });

  it('On init users should be loaded', fakeAsync(() => {
    spyOn(apiService, 'getUser').and.returnValue(of(user).pipe(delay(1)));

    // Trigger ngOnInit()
    fixture.detectChanges();

    expect(component.users).toBeUndefined();
    expect(apiService.getUser).toHaveBeenCalledWith();

    // Simulates the asynchronous passage of time
    tick(1);

    expect(component.users).toEqual(user);
  }));
});
