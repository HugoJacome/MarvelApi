import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as MD5 from 'crypto-js/md5';

@Injectable({
    providedIn: 'root'
})
export class MarvelHeroesService {

    private pubkey = '84ef7685cd270344c71886585101d21d';
    private pvtkey = '521966f254580b7d72e9bdc0adf8336953c59f14';
    private url = 'https://gateway.marvel.com/v1/public/characters';

constructor(private httpClient: HttpClient) { }

getMarvelHeroes() {
    var ts = new Date().getTime();
    var message = ts+environment.pvtkey+environment.pubkey;
    var hash = MD5(message);
    let urlEnd = `?ts=${ts}&apikey=${environment.pubkey}&hash=${hash}`;
    return this.httpClient.get(this.url + urlEnd);
}

}