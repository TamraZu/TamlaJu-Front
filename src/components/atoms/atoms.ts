import {atom} from 'recoil';

export const memberId = atom<number>({
    key:'memberId',
    default:-1
})