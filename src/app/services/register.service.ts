import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ENDPOINT } from '../utils/constants/endpoints';
import { IResponse } from '../utils/interfaces/response.interface';
import { TForm } from '../utils/types/form';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(tRegister: TForm): Observable<string> {
    return this.http
      .post<IResponse>(ENDPOINT.REGISTER, tRegister)
      .pipe(map(({ message }) => message));
  }
}
