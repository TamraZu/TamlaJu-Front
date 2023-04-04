import { atom } from 'recoil';
import { BottomSheetDataType } from 'types/layoutControlType';

export const memberId = atom<number>({
    key: 'memberId',
    default: -1
})

export const bottomSheetOpened = atom<boolean>({
    key: "bottomSheet",
    default: false
})

export const selectedMarker = atom<number>({
    key: "selectedMarkerID",
    default: -1
})

export const bottomSheetData = atom<BottomSheetDataType>({
    key:"bottomSheetData",
    default:undefined,
})