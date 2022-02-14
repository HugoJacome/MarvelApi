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
  start = 0;
  end = 6;
  index = 1;
  maxPages = 0;
  queryPage = 1;
  total = 0;
  cardsTotal: any;
  cards: any;
  constructor(private service: MarvelHeroesService) { }
  ngOnInit() {
    this.getHeroes();
  }

  onPrevious() {
    if (this.index > 1) {
      this.index -= 1;
      this.start = (this.index * 6) - 6;
      this.end = (this.index * 6);
      this.cards = this.cardsTotal.slice(this.start, this.end);
    } else {
      this.cards = this.cardsTotal.slice(0, 6);
    }
  }
  onNext() {
    this.index += 1
    if (this.maxPages < this.index) {
      this.index -= 1
    }
    this.start = (this.index * 6) - 6;
    this.end = (this.index * 6);
    console.log(this.end);
    console.log(this.cardsTotal.length);
    if (this.end > this.cardsTotal.length) {
      this.getNextHeroes(this.queryPage);
      this.queryPage += 1;
    }
    this.cards = this.cardsTotal.slice(this.start, this.end)
  }
  searchHeroes(info: string) {
    this.service.getSearchMarvelHeroes(info)
      .subscribe(response => {
        this.restartPages()
        this.total = response.total;
        this.getMaxPages();
        this.cardsTotal = response.results;
        this.cards = this.cardsTotal.slice(this.start, this.end)
      });
    // this.store.dispatch(new search.Load(info));
  }
  getHeroes() {
    this.service.getMarvelHeroes()
      .subscribe(response => {
        console.log(response);
        this.total = response.total;
        this.getMaxPages();
        this.cardsTotal = response.results;
        this.cards = this.cardsTotal.slice(this.start, this.end)
      });
  }
  getNextHeroes(page: number) {
    this.service.getNextMarvelHeroes(page)
      .subscribe(response => {
        this.cardsTotal = this.cardsTotal.concat(response.results);
        this.cards = this.cardsTotal.slice(this.start, this.end)
      });
  }
  getMaxPages() {
    this.maxPages = Math.ceil(this.total / 6);
  }
  restartPages() {
    this.index = 1
    this.start = 0;
    this.end = 6;
  }
}
