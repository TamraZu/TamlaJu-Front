import { latLngType } from "./kakaoMapType";

export type RankingType = {
    alcoholId: number;
    name: string;
    imageUrl: string;
    address: string;
    ateCount: number
}

/** 상세 조회때 사용 */
export type DrinkType = {
    alcoholId: number;
    name: string;
    imageUrl: string;
    address: string;
    ateCount: number

}

/** 목록 조회때 사용하는게 알코올 타입*/
export type AlcoholType = {
    alcoholId:number;
    imageUrl:string;
    name:string;
    hasAte?:boolean|undefined;
}

export type DrinkRankingType = {
    data: DrinkType[]
}

export type BrewerlyType = {
    factoryId: number;
    name: string;
    address: string;
    latLng?:latLngType;
    alcohols: AlcoholType[];
}