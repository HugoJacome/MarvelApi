import { Action } from '@ngrx/store';
import { AlertMessage } from '../../shared/models';
import { MarvelResponse } from '../../models/marvel-response';

export enum LoadHeroesActionTypes {
    Load = '[LoadHeroes] Load',
    LoadSuccess = '[LoadHeroes] Load Success',
    LoadFailure = '[LoadHeroes] Load Failure',
    ClearError = '[LoadHeroes] Clear Error'
}
export class Load implements Action {
    readonly type = LoadHeroesActionTypes.Load;
    constructor(public page: string, public info: string) { }
}
export class LoadSuccess implements Action {
    readonly type = LoadHeroesActionTypes.LoadSuccess;
    constructor(public payload: MarvelResponse[]) { }
}
export class LoadFailure implements Action {
    readonly type = LoadHeroesActionTypes.LoadFailure;
    constructor(public payload: AlertMessage) { }
}
export class ClearError implements Action {
    readonly type = LoadHeroesActionTypes.ClearError;
    constructor() { }
}

export type LoadHeroesActions =
    | Load
    | LoadSuccess
    | LoadFailure
    | ClearError;
