import { ReactNode } from 'react';
import { latLngType } from './kakaoMapType';

export interface BottomSheetControlType {
    children: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
    onOpen?: () => void;
    data?:BottomSheetDataType;
}

export interface BottomSheetDataType {
    selectedId:number;
    name?:string;
    address?:string;
    LatLng?:latLngType
}

export interface BottomSheetRecoilPropType {
    data:BottomSheetDataType|null;
    onDataChange:(data:BottomSheetDataType) => void;
    toggleBottomSheet:(data:boolean) => void;
    children?:ReactNode;
}