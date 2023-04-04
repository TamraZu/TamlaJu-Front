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
`
const SplashArt = styled.img`
    height:100vh;
    /* aspect-ratio:375 / 812; */
    object-fit:contain;
    object-position:center bottom;
    opacity: 1;
    animation: ${fadeOut} 2.5s ease-out;
    animation-fill-mode: forwards;
    cursor: pointer;
`
const StyledButton = styled.button`
    background-color : #FD6E21;
    width: 154px;
    height: 48px;
    border-radius:24px;
    position:fixed;
    
    bottom:10%;
    left:50%;
    transform:translate(-50%, 50%);
`

const Header = styled.h1`
    color:white;
    font-size:20px;
    text-align:center;
`

export default function Onboard() {
    const navigate = useNavigate();


    const navigateToHome = () => {
        navigate('/signin');
        return
    }

    return (
        <Wrapper onClick={navigateToHome}>
            <SplashArt src={splash} />
            <StyledButton>
                <Header>
                    시작하기
                </Header>
            </StyledButton>
        </Wrapper>
    )
}