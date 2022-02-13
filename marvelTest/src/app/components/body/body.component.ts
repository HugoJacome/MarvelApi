import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseMarvel } from 'src/app/models/response';
import { MarvelHeroesService } from 'src/app/service/marvel-heroes.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  data: any;
  cards = [
    {
      title: 'superhero',
    },
    {
      title: 'superhero',
    },
    {
      title: 'superhero',
    },
    {
      title: 'superhero',
    },
    {
      title: 'superhero',
    }
  ];
  constructor(private service: MarvelHeroesService) { }
  ngOnInit() {
    this.service.getMarvelHeroes()
    .subscribe(response => {
      this.data = response;
      console.log(response);
    });
  }

}
