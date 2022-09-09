import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ENDPOINT } from '../utils/constants/endpoints';
import { LOCAL_STORAGE } from '../utils/constants/localstorage';
import { IUser } from '../utils/interfaces/user.interface';
import { TForm } from '../utils/types/form';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<IUser>(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE.CURRENT_USER) || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): IUser {
    return this.currentUserSubject.value;
  }

  login(tLogin: TForm): Observable<IUser> {
    return this.http.post<IUser>(ENDPOINT.LOGIN, tLogin).pipe(
      map((user) => {
        localStorage.setItem(LOCAL_STORAGE.CURRENT_USER, JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem(LOCAL_STORAGE.CURRENT_USER);
    this.currentUserSubject.next({
      username: '',
      email: '',
      token: '',
    });
  }
}
