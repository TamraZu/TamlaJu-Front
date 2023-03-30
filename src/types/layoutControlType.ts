import { ReactNode, SetStateAction } from 'react';
import { brewerlyType } from './drinkType';
import { latLngType } from './kakaoMapType';

export interface BottomSheetControlType {
    children: ReactNode;
    isOpen: boolean;
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
    data:SetStateAction<brewerlyType>;
    onDataChange:(data:brewerlyType) => void;
    toggleBottomSheet:(data:boolean) => void;
    children?:ReactNode;
}