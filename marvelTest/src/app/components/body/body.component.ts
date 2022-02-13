import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDataMarvel } from 'src/app/models/response';
import { MarvelHeroesService } from 'src/app/service/marvel-heroes.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  index = 0;
  page = 1;
  queryPage = 1;
  cardsTotal: any;
  cards: any;
  constructor(private service: MarvelHeroesService) { }
  ngOnInit() {
    this.getHeroes();
  }

  onPrevious() {
    if (this.index !== 6) {
      this.index -= 6;
      this.cards = this.cardsTotal.slice(this.index - 6, this.index);
    }
  }
  onNext() {
    if(this.page === 5){
      this.getNextHeroes(this.queryPage);
      this.queryPage +=1;
      this.page = 1;
    }
    this.index += 6;
    this.page += 1;
    this.cards = this.cardsTotal.slice(this.index, this.index + 6)
  }
  searchHeroes(info: string) {
    console.log(info)
    // this.store.dispatch(new search.Load(info));
  }
  getHeroes(){
    this.service.getMarvelHeroes()
    .subscribe(response => {
      if (this.index === 0) {
        this.cardsTotal = response.data.results;
        this.cards = this.cardsTotal.slice(this.index, this.index + 6)
      } else {
        this.cardsTotal = this.cardsTotal.push(response.data.results);
      }
    });
  }
  getNextHeroes(page: number){
    this.service.getNextMarvelHeroes(page)
    .subscribe(response => {
      this.cardsTotal = this.cardsTotal.concat(response.data.results);
      this.cards = this.cardsTotal.slice(this.index, this.index + 6)
    });
  }
}
