import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarvelResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MarvelHeroesService {

  constructor(private http: HttpClient) { }
  getMarvelHeroess(page: string, info: string): Observable<MarvelResponse[]> {
    return this.http.get<MarvelResponse[]>(`v1/public/characters`);
  }
}