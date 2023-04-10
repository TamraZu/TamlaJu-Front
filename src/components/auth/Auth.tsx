import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "./Cookie";


const HasAuth = () => {
    const navigate = useNavigate();
    const token = getCookie('authorization');
    useEffect(() => {
        if (!token) {
            alert('로그인 정보를 불러올 수 없습니다.\n로그인 화면으로 이동합니다.')
            navigate('/');
        }
    }, [])

}

export default HasAuth;