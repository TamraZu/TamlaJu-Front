import { ReactNode, SetStateAction } from 'react';
import { AlcoholType, BrewerlyType } from './drinkType';
import { latLngType } from './kakaoMapType';

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
    LatLng?:latLngType
    alcohols: AlcoholType[];
}

export interface BottomSheetRecoilPropType {
    data:SetStateAction<BrewerlyType|undefined>;
    onDataChange:(data:BrewerlyType) => void;
    children?:ReactNode;
}