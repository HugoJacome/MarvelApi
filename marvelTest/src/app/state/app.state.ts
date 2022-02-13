import { MarvelResponse } from "../models";

export interface AppState{
    readonly marvelHeroesState: MarvelResponse[];
}