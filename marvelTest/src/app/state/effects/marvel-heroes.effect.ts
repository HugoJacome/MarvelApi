import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { LoadHeroesActionTypes, Load, LoadFailure, LoadSuccess } from '../actions/marvel-heroes.actions';
import { MarvelHeroesService } from 'src/app/services/marvel-heroes.service';

@Injectable()
export class Effects {
    @Effect()
    loadList$: Observable<Action> = this.actions$.pipe(
        ofType<Load>(LoadHeroesActionTypes.Load),
        switchMap(action => {
            return this._marvelHeroessService.getMarvelHeroess(action.page, action.info).pipe(
                map(success => new LoadSuccess(success)),
                catchError(err => {
                    if (err instanceof HttpErrorResponse) {
                        return of(new LoadFailure({ type: 'danger', text: err.error }));
                    } else {
                        return of(new LoadFailure({ type: 'danger', text: err }));
                    }
                })
            );
        })
    );

    constructor(
        private actions$: Actions,
        private _marvelHeroessService: MarvelHeroesService
    ) { }
}