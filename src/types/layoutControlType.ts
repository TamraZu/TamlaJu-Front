import { ReactNode, SetStateAction } from 'react';
import { brewerlyType } from './drinkType';
import { latLngType } from './kakaoMapType';

export interface BottomSheetControlType {
    children: ReactNode;
    onClose?: () => void;
    onOpen?: () => void;
    data?:brewerlyType;
}

export interface BottomSheetDataType {
    selectedId:number;
    name?:string;
    address?:string;
    LatLng?:latLngType
}

export interface BottomSheetRecoilPropType {
    data:SetStateAction<brewerlyType|undefined>;
    onDataChange:(data:brewerlyType) => void;
    children?:ReactNode;
}