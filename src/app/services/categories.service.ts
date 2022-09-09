import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../utils/constants/endpoints';
import { ICategories } from '../utils/interfaces/categories.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  categories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(ENDPOINT.CATEGORIES);
  }
}
