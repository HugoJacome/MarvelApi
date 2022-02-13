

export interface ResponseData{
    data: ResponseDataMarvel;
    status: string;
    code: number;
}
export interface ResponseDataMarvel {
    offset: number;
    limit: number;
    total: number;
    count:number;
    results: HeroesDataMarvel[];
}

export interface HeroesDataMarvel {
    name: string;
    comics: Comics;
    series: Series;
    stories: Stories;
    events: Events;
}
export interface Comics{
    available: number;
}
export interface Series{
    available: number;
}
export interface Stories{
    available: number;
}
export interface Events{
    available: number;
}
