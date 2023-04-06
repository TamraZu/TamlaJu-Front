import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { memberId } from "components/atoms/atoms";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "services";
import styled from '@emotion/styled';

const { Kakao } = window;

const StyledText = styled.div`
    width:100%;
    text-align: center;
    margin-top:300px;
`

const loginViaKakao = async (setMemberId: (a: string) => void, Navto: (a: string) => void) => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    let grant_type = "authorization_code";
    let client_id = process.env.REACT_APP_KAKAOMAP_APPKEY;

    // 카카오 서버에 인증 요청
    const kakaoToken: any = await axios.post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${process.env.REACT_APP_FRONTEND_BASE_URL}/login/kakao&code=${code}`
        , {
            headers: {
                "Content-type": "application/x-www-form-urlencoded;chartset=utf-8",
            }
        })
        .catch(err => { console.error('kakaoToken', err) })

    Kakao.Auth.setAccessToken(kakaoToken.data.access_token);

    const kakaoUserInfo = await Kakao.API.request({
        url: "/v2/user/me",
        data: {
            property_keys: ['kakao_account.email', 'kakao_account.profile']
        }
    }).catch((err: any) => { console.error('kakaoUserInfo', err) })

    const getUser: any = await axios.post('/api/v1/auth', {
        email: kakaoUserInfo.kakao_account.email,
        nickname: kakaoUserInfo.kakao_account.profile.nickname,
        imageUrl: kakaoUserInfo.kakao_account.profile.profile_image_url,
    }).catch((err: any) => { console.error('getUser', err) })

    axios.interceptors.request.use(
        (config: InternalAxiosRequestConfig<any>) => {
            config.headers.Authorization = getUser.data.data.accessToken;
            config.headers["Content-Type"] = "application/json"
            return config;
        },
        (error) => {
            console.error(error);
            return Promise.reject(error);
        })

    const MId: any = await axios.get('/auth/test', {
        headers: { Authorization: `${getUser.data.data.accessToken}` }
    }).catch((err: any) => { console.error('memberId', err) })

    setMemberId(MId.data)
    Navto('/home')
}

const KakaoLogin = () => {
    const [mId, setMid] = useRecoilState<string>(memberId)
    const navigate = useNavigate();

    useEffect(() => {
            loginViaKakao(setMid, navigate)
    }, [])

    return <StyledText>kakao login 진행중</StyledText>
}

export default KakaoLogin;