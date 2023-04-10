import { atom } from 'recoil';
import { BottomSheetDataType } from 'types/layoutControlType';

export const memberId = atom<string>({
    key: 'memberId',
    default: '',
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
    key: "bottomSheetData",
    default: {
        selectedId: -1,
        name: '',
        address: '',
        LatLng: {
            lat: 0,
            lng: 0,
        },
        alcohols:[]
    }
})