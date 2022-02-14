import { Action, createReducer, on } from '@ngrx/store';
import { ResponseData } from "src/app/models";
import * as searchActions from './search-heroes.actions';

export interface State {
    data: ResponseData
}
export const initialState: State = {
    data: {
        code: 0,
        status: '',
        data: {
            count: 0,
            limit: 0,
            offset: 0,
            total: 0,
            results: []
        }
    }
};
export const searchHeroesReducer = createReducer(
    initialState,
    on(searchActions.search, state => ({ ...state, data: state.data }))
  );