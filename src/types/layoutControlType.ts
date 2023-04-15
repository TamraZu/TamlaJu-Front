import { ReactNode, SetStateAction } from 'react';
import { AlcoholType, BrewerlyType } from './DrinkType';
import { LatLngType } from './KakaoMapType';

export interface BottomSheetControlType {
    children: ReactNode;
    onClose?: () => void;
    onOpen?: () => void;
    data?:BrewerlyType;
}

export interface BottomSheetDataType {
    selectedId:number;
    name?:string;
    address?:string;
    LatLng?:LatLngType
    alcohols: AlcoholType[];
}

export interface BottomSheetRecoilPropType {
    data:SetStateAction<BrewerlyType|undefined>;
    onDataChange:(data:BrewerlyType) => void;
    children?:ReactNode;
}