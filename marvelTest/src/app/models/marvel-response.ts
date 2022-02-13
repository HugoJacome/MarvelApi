

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
    thumbnail: Thumbnail;
}
export interface Thumbnail{
    extension: string;
    path: string;
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
