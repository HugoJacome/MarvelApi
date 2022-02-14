

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
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    comics: Comics;
    series: Series;
    stories: Stories;
    events: Events;
    thumbnail: Thumbnail;
    urls: Urls[];
}
export interface Thumbnail{
    extension: string;
    path: string;
}
export interface AdditionalData{
    available: number;
    collectionURI: string;
    returned: number;

}
export interface Comics extends AdditionalData{
    items: Items[];
}
export interface Series extends AdditionalData{
    items: Items[];
}
export interface Stories extends AdditionalData{
    items: ItemsStories[];
}
export interface Events extends AdditionalData{
    items: Items[];
}
export interface Urls{
    type: string;
    url: string;
}
export interface Items{
    resourceURI: string;
    name: string;
}
export interface ItemsStories extends Items{
    type: string
}