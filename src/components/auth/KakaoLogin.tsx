import { AxiosResponse } from "axios";
import { memberId } from "components/atoms/atoms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "services";
import { UserType } from "types/UserType";

const { Kakao } = window;

const loginViaKakao = async (setMemberId: (a: string) => void, Navto: (a: string) => void) => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    let grant_type = "authorization_code";
    let client_id = process.env.REACT_APP_KAKAOMAP_APPKEY;

    // 카카오 서버에 인증 요청
    axios.post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${process.env.REACT_APP_FRONTEND_BASE_URL}/login/kakao&code=${code}`
        , {
            headers: {
                "Content-type": "application/x-www-form-urlencoded;chartset=utf-8",
            }
        })
        .then(res => {
            // 액세스 토큰 저장

            console.log(res)
            Kakao.Auth.setAccessToken(res.data.access_token);
            Kakao.API.request({
                url: "/v2/user/me",
                data: {
                    property_keys: ['kakao_account.email', 'kakao_account.profile']
                },
                success: (response: any) => {
                    console.log(response)
                    axios.post('/api/v1/auth', {
                        email: response.kakao_account.email,
                        nickname: response.kakao_account.profile.nickname,
                        imageUrl: response.kakao_account.profile.profile_image_url,
                    }).then((res: any) => {
                        axios.get('/auth/test', {
                            headers: { Authorization: `${res.data.data.accessToken}` }
                        }).then(t => {
                            setMemberId(t.data);
                            Navto('/home');
                        })

                    }).catch(err => {
                        console.error(err);
                    })

                },
                fail: (error: any) => {
                    console.log(error);
                }
            })

        }).catch(err => {
            console.log(err)
        })
}

const KakaoLogin = () => {
    const [mId, setMid] = useRecoilState<string>(memberId)
    const navigate = useNavigate();
    useEffect(() => {
        loginViaKakao(setMid, navigate)
    }, [])

    return <div>kakao login 완료</div>
}

export default KakaoLogin;