import { InternalAxiosRequestConfig } from "axios";
import React from "react";
import axios from "services";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useToast } from "components/hooks/useToast";
import { getNewUID } from "util/getUID";
import {ReactComponent as ProfileIcon} from 'atoms/icons/ProfileIcon.svg'

const StyledLogout = styled.div`
    cursor:pointer;

`

const logout = async () => {

    axios.interceptors.request.use(
        (config: InternalAxiosRequestConfig<any>) => {
            config.headers.Authorization = null;
            config.headers["Content-Type"] = null;
            return config;
        })

    // setCookie('authorization', '', 0)
    localStorage.removeItem('authorization')

}

const KakaoLogout: React.FC = () => {

    // 미관상 임시로 내부 내용 없앱니다.
    const { fireToast } = useToast();
    const navigate = useNavigate();
    return (<StyledLogout onClick={() => {
        logout().then(() => {
            fireToast({
                children:'성공적으로 로그아웃 되었습니다.',
                id:getNewUID(),
                ImageComponent:ProfileIcon,
                duration:1500
            })
            navigate('/');
        })
    }}>로그아웃</StyledLogout>);
}

export default KakaoLogout;