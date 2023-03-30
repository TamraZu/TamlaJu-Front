import { latLngType } from "./kakaoMapType";

/** 상세 조회때 사용 */
export type drinkType = {
    alcoholId: number;
    name?: string | null;
    imageUrl?: string | null;
    address?: string | null;
    ateCount: number

}

/** 목록 조회때 사용하는게 알코올 타입*/
export type alcoholType = {
    alcoholId:number;
    imageUrl:string;
    name:string;
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