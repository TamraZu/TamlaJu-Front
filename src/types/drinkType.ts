import { latLngType } from "./kakaoMapType";

export type rankingType = {
    alcoholId: number;
    name: string;
    imageUrl: string;
    address: string;
    ateCount: number
}

/** 상세 조회때 사용 */
export type drinkType = {
    alcoholId: number;
    name: string;
    imageUrl: string;
    address: string;
    ateCount: number

}

/** 목록 조회때 사용하는게 알코올 타입*/
export type alcoholType = {
    alcoholId:number;
    imageUrl:string;
    name:string;
    hasAte?:boolean|undefined;
}

export type drinkRankingType = {
    data: drinkType[]
}

export type brewerlyType = {
    factoryId: number;
    name: string;
    address: string;
    latLng?:latLngType;
    alcohols: alcoholType[];
}