import { InternalAxiosRequestConfig } from "axios";
import React from "react";
import axios from "services";
import { setCookie } from "./Cookie";

const logout = () => {
    axios.interceptors.request.use(
        (config: InternalAxiosRequestConfig<any>) => {
            config.headers.Authorization = null;
            config.headers["Content-Type"] = null;
            return config;
        })

    setCookie('authorization', '', 0)
}

const KakaoLogout :React.FC = () => {
    return (<div onClick={logout}>로그아웃(임시)</div>);
}

export default KakaoLogout;