import { InternalAxiosRequestConfig } from "axios";
import React from "react";
import axios from "services";

const logout = () => {
    axios.interceptors.request.use(
        (config: InternalAxiosRequestConfig<any>) => {
            config.headers.Authorization = null;
            config.headers["Content-Type"] = null;
            return config;
        })
}

const KakaoLogout :React.FC = () => {
    return (<div onClick={logout}>로그아웃</div>);
}

export default KakaoLogout;