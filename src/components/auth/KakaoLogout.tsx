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
    // 미관상 임시로 내부 내용 없앱니다.
    // return (<div onClick={logout}>로그아웃(임시)</div>);
    return (<div onClick={logout}></div>);
}

export default KakaoLogout;