import { LoadHeroesActionTypes, LoadHeroesActions } from '../actions/marvel-heroes.actions';
import { AlertMessage } from 'src/app/shared/models';
import { MarvelResponse } from 'src/app/models/marvel-response';

export interface State {
    list: MarvelResponse[];
    loading: boolean;
    error: AlertMessage;
}
export const initialState: State = {
    list: [],
    loading: false,
    error: new AlertMessage
};

export function reducer(state = initialState, action: LoadHeroesActions): State {
    switch (action.type) {
        case LoadHeroesActionTypes.Load: {
            return {
                ...state,
                list: [],
                loading: true,
                error: new AlertMessage
            };
        }
        case LoadHeroesActionTypes.LoadSuccess: {
            return {
                ...state,
                list: action.payload,
                loading: false,
                error: new AlertMessage
            };
        }
        case LoadHeroesActionTypes.LoadFailure: {
            return {
                ...state,
                list: [],
                loading: false,
                error: action.payload
            };
        }
        case LoadHeroesActionTypes.ClearError: {
            return {
                ...state,
                error: new AlertMessage
            };
        }
        default: {
            return state;
        }
    }
}

export const getLoadHeroessList = (state: State) => state.list;
export const getLoadHeroessListLoading = (state: State) => state.loading;
export const getLoadHeroessListError = (state: State) => state.error;
