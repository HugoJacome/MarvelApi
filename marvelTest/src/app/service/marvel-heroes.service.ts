import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as MD5 from 'crypto-js/md5';
import { ResponseData } from '../models/response';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MarvelHeroesService {
    private url = 'https://gateway.marvel.com/v1/public/characters';
    private ts = new Date().getTime();
    private message = this.ts + environment.pvtkey + environment.pubkey;
    private hash = MD5(this.message);
    private urlEnd = `?ts=${this.ts}&apikey=${environment.pubkey}&hash=${this.hash}&limit=1`;


    constructor(private httpClient: HttpClient) { }

    getMarvelHeroes() {
        return this.httpClient.get<any>(this.url + this.urlEnd).pipe(
            map((response: ResponseData) => {
                return response.data;
            }), catchError(error => {
                return throwError('Something went wrong!');
            }));
    }
    getNextMarvelHeroes(page: number) {
        return this.httpClient.get<any>(this.url + this.urlEnd + `&offset=${30 * page}`).pipe(
            map((response: ResponseData) => {
                return response.data;
            }), catchError(error => {
                return throwError('Something went wrong!');
            }));
    }
    getSearchMarvelHeroes(query: string) {
        return this.httpClient.get<any>(this.url + this.urlEnd + `&nameStartsWith=${query}`).pipe(
            map((response: ResponseData) => {
                return response.data;
            }), catchError(error => {
                return throwError('Something went wrong!');
            }));
    }

}
