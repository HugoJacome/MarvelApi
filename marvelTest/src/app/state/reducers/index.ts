import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector
} from '@ngrx/store';
import { LoadHeroesActions } from '../actions/marvel-heroes.actions';
import * as fromHeroes from '../reducers/marvel-heroes.reducers';
// Root app State
export interface State {
    marvelHeroes: fromHeroes.State;
}
// Root app reducers
export const reducers: ActionReducerMap<State, LoadHeroesActions> = {
    marvelHeroes: fromHeroes.reducer,
};

// Root app selectors
export const getHeroesState = createFeatureSelector<fromHeroes.State>('marvelHeroes');

export const getMarvelHeroes = createSelector(
    getHeroesState,
    fromHeroes.getLoadHeroessList
);
export const getLoading = createSelector(
    getHeroesState,
    fromHeroes.getLoadHeroessListLoading
);