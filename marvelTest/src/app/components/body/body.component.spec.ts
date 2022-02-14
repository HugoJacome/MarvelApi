import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarvelHeroesService } from 'src/app/service/marvel-heroes.service';

import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;  
  let service: MarvelHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BodyComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MarvelHeroesService
      ]
    }).compileComponents();
    service = TestBed.inject(MarvelHeroesService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
