import splash from 'atoms/png/OnboardingSplashArt.png'
import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';
import { useNavigate } from 'react-router-dom';


const fadeOut = keyframes`
    from, 50%{
        opacity: 0;
    }

    to, 90% {
        opacity: 1;
    }
`

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    left:0;
    right:0;
    position: fixed;
`

const SubWrapper = styled.div`
    height:100vh;
    aspect-ratio:375 / 812;
    position:absolute;
    object-fit:contain;
    left:50%; 
    transform:translateX(-50%);
`

const SplashArt = styled.img`

`
const StyledButton = styled.button`
    background-color : #fee500;
    width: calc(100% - 64px);
    height: 48px;
    border-radius:12px;
    position:absolute;
    bottom:75px;
    left:50%;
    transform:translateX(-50%);
`

const Header = styled.h1`
    color:white;
    font-size:16px;
    text-align:center;
    color:#000;

`
const kakaoLogin = () => {


}


export default function Onboard() {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/signin');
        return
    }

    return (
        <Wrapper>
            <SubWrapper>
            <SplashArt src={splash} />
            <StyledButton onClick={kakaoLogin}>
                <Header>
                    카카오로 로그인하기
                </Header>
            </StyledButton>
            </SubWrapper>
        </Wrapper>
    )
}