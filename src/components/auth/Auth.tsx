import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import ModalAuth from "components/common/ModalAuth";
import axios from "services";
import { InternalAxiosRequestConfig } from "axios";

const HasAuth = () => {
    const navigate = useNavigate();
    const loggedInfo = localStorage.getItem('authorization');
    // const { pathname } = useLocation();
    // const [isOpen, setIsOpen] = useState(false);
    // console.log(token);

    
    useEffect(() => {
        // if (token === 'guest') {
        //     if (!(pathname === '/home' || pathname === '/')) {
        //         // 로그인이 필요한 서비스 모달 이벤트 호출
        //         console.log('guestLogin')
        //         setIsOpen(true);
        //         // 만약 로그인을 하지 않고 취소한다면 상태 변화 없음.
        //     }
        // }

        if (!loggedInfo) {
            alert('로그인 정보를 불러올 수 없습니다.\n로그인 화면으로 이동합니다.')
            navigate('/');
        } else {
            axios.interceptors.request.use(
                (config: InternalAxiosRequestConfig<any>) => {
                    config.headers.Authorization = loggedInfo;
                    config.headers["Content-Type"] = "application/json"
                    return config;
                },
                (error) => {
                    console.error(error);
                    return Promise.reject(error);
                })
        }


    }, [loggedInfo, navigate])
}

export default HasAuth;