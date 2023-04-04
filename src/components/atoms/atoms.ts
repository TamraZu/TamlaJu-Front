import { atom } from 'recoil';

export const memberId = atom<number>({
    key: 'memberId',
    default: -1
})

export const bottomSheetOpened = atom<boolean>({
    key: "bottomSheet",
    default: false
})