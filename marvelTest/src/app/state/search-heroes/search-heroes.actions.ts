import { createAction, props } from '@ngrx/store'
export const search = createAction(
    '[SearchHeroes] Search',
    props<{ limit: string; startWith: string }>()
);
