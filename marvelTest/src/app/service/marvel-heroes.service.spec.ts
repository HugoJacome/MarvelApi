import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController }
    from '@angular/common/http/testing';
import { ResponseDataMarvel } from '../models/response';
import { MarvelHeroesService } from './marvel-heroes.service';
import { mockData } from '../mocks/marvel-heroes-mock';

// describe('MarvelHeroesService', () => {
//     let httpTestingController: HttpTestingController;
//     let service: MarvelHeroesService;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             providers: [MarvelHeroesService],
//             imports: [HttpClientTestingModule]
//         });

//         httpTestingController = TestBed.get(HttpTestingController);
//         service = TestBed.get(MarvelHeroesService);
//     });

//     afterEach(() => {
//         httpTestingController.verify();
//     });

//     it('should be created', () => {
//         expect(service).toBeTruthy();
//     });

//     it('should provide data', () => {
//         service.getMarvelHeroes().subscribe((data: ResponseDataMarvel) => {
//             // expect(data).not.toBe(null);
//             expect(JSON.stringify(data)).toEqual(JSON.stringify(mockData));
//         });

//         const req = httpTestingController
//             .expectOne(`https://gateway.marvel.com/v1/public/characters?ts=1644857367370&apikey=84ef7685cd270344c71886585101d21d&hash=9d32210d529aa8e53fb6f02eb7250d1f&limit=1`);

//         req.flush(mockData);
//     });
// });

// describe('MarvelHeroesService 1', () => {
//     let service: MarvelHeroesService;
//     let httpController: HttpTestingController;

//     let url = 'https://gateway.marvel.com/v1/public/characters?ts=1644857367370&apikey=84ef7685cd270344c71886585101d21d&hash=9d32210d529aa8e53fb6f02eb7250d1f&limit=1';

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [HttpClientTestingModule],
//         });
//         service = TestBed.inject(MarvelHeroesService);
//         httpController = TestBed.inject(HttpTestingController);
//     });


//     it('should call get Heroes and return data', () => {
//         service.getMarvelHeroes().subscribe((res) => {
//             console.log(res);
//             expect(res).toEqual(mockData);
//         });
//         const req = httpController.expectOne({
//             method: 'GET',
//             url: `${url}`,
//         });

//         //4
//         req.flush(mockData);
//     });
// });