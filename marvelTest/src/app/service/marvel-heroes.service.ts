import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as MD5 from 'crypto-js/md5';
import { ResponseData } from '../models/response';

@Injectable({
    providedIn: 'root'
})
export class MarvelHeroesService {
    private url = 'https://gateway.marvel.com/v1/public/characters';
    private ts = new Date().getTime();
    private message = this.ts + environment.pvtkey + environment.pubkey;
    private hash = MD5(this.message);
    private urlEnd = `?ts=${this.ts}&apikey=${environment.pubkey}&hash=${this.hash}&limit=30`;


    constructor(private httpClient: HttpClient) { }

    getMarvelHeroes() {
        var result = this.httpClient.get<ResponseData>(this.url + this.urlEnd)
        return result;
    }
    getNextMarvelHeroes(page: number) {
        var result = this.httpClient.get<ResponseData>(this.url + this.urlEnd + `&offset=${30 * page}`)
        return result;
    }
    getSearchMarvelHeroes(query: string) {
        var result = this.httpClient.get<ResponseData>(this.url + this.urlEnd + `&nameStartsWith=${query}`)
        return result;
    }

}