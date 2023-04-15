import { useToast } from "components/hooks/useToast";
import { getNewUID } from "util/getUID";
import {ReactComponent as ProfileIcon} from 'atoms/icons/ProfileIcon.svg'

export async function InitUserInfo() {
    const loggedInfo = localStorage.getItem('authorization');
    const {fireToast} = useToast();
    
    if (!loggedInfo) {
        fireToast({
            children:'로그인 세션이 만료되어\n로그아웃 처리되었습니다.',
            id:getNewUID(),
            ImageComponent:ProfileIcon,
            duration:1500
        })
    }
} 