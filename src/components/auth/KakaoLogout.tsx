import { InternalAxiosRequestConfig } from "axios";
import React from "react";
import axios from "services";
import { setCookie } from "./Cookie";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

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

    setCookie('authorization', '', 0)
    alert('로그아웃 되었습니다.')

}

const KakaoLogout: React.FC = () => {
    // 미관상 임시로 내부 내용 없앱니다.
    const navigate = useNavigate();
    return (<StyledLogout onClick={() => {
        logout().then(() => {
            navigate('/')
        })
    }}>로그아웃</StyledLogout>);
}

export default KakaoLogout;