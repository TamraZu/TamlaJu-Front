import { CategoryData } from 'pages/List';
import { atom } from 'recoil';
import { BottomSheetDataType } from 'types/LayoutControlType';
import { ToastInterface } from 'types/ToastInterface';

export const memberId = atom<string>({
    key: 'memberId',
    default: '',
})

export const toastState = atom<ToastInterface[]>({
    key: 'toastState',
    default:[]
})

export const bottomSheetOpened = atom<boolean>({
    key: "bottomSheet",
    default: false
})

export const selectedMarker = atom<number>({
    key: "selectedMarkerID",
    default: -1
})

export const selectedCategory = atom<CategoryData>({
    key:"selectedCategory",
    default:{ name: 'Makgeolli', id: 0 }
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