import React, { useEffect } from 'react';
import splash from 'atoms/png/OnboardingSplashArt.png'
import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';
import { useNavigate } from 'react-router-dom';


const fadeOut = keyframes`
    from, 50%{
        opacity: 1;
    }

    to, 90% {
        opacity: 0;
    }
`

const SplashArt = styled.img`
    max-width: 375px;
    margin:auto auto auto 0;
    position: absolute;
    bottom: 0;
    /* transition: all 0.5s; */
    opacity: 1;
    animation: ${fadeOut} 2.5s ease-out;
    animation-fill-mode: forwards;
    cursor: pointer;
`
export default function Onboard() {
    const navigate = useNavigate();


    const navigateToHome = () => {
        navigate('/home');
        return
    }
    
    const timeout = () => setTimeout(() => {
            navigateToHome()
        }, 2500)

    useEffect(() => {
        timeout();
        return () => {
            clearTimeout(timeout());
        }
    }, [])

    return (
        <div onClick={navigateToHome}>
            <SplashArt src={splash} />
        </div>
    )
}