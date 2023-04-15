import { LatLngType } from "./KakaoMapType";

/**
 * Ranking 조회 시 사용
 * DrinkType이랑 같아서 추후 하나로 통일하여 써도 될듯.
 */
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
    data: RankingType[]
}

export type BrewerlyType = {
    factoryId: number;
    name: string;
    address: string;
    latLng?:LatLngType;
    alcohols: AlcoholType[];
}
