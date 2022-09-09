import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../utils/constants/endpoints';
import { ISongs } from '../utils/interfaces/songs.interface';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(private http: HttpClient) {}

  songs(): Observable<ISongs[]> {
    return this.http.get<ISongs[]>(ENDPOINT.SONGS);
  }

  songsByFilter(
    search: string,
    surpriseMe: boolean,
    categories: string[]
  ): Observable<ISongs[]> {
    let params = new HttpParams()
      .set('search', search)
      .set('categories', categories.join(','));
    if (surpriseMe) params = params.set('surpriseMe', surpriseMe);
    return this.http.get<ISongs[]>(ENDPOINT.SONGS_BY_FILTER, { params });
  }
}
