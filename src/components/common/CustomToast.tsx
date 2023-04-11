import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import React, { ReactNode, useEffect, useState } from "react"

type ToastType = {
    children: ReactNode
    delay: number;
    ImageComponent:  React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const StyledContainer = styled.div`
    color:#fff;
    border-radius:12px;
    background:#273a56;
    position:fixed;
    display:flex;
    gap:8px;
    left:50%;
    transform:translate(-50%,0);
    top:56px;
    width:343px;
    height:52px;
    font-weight:700;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`

const SlideIn = keyframes`
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
`

const SlideOut = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-100%);
    }
`

const CustomToast = ({ children, delay, ImageComponent }: ToastType) => {

    const [toastState, setToastState] = useState(false);
    const [toastAnimation, setToastAnimation] = useState("none")

    const handleClose = () => {
        setToastState(false);
    }

    const handleOpen = () => {
        setToastState(true);
    }

    useEffect(() => {
        let outerTimer;
        let timer = setTimeout(() => {
            setToastAnimation('out');
            outerTimer = setTimeout(() => {
                setToastState(false);
            }, 500);
        }, delay)
        return () => {
            clearTimeout(timer);
        }
    }, [])

    return (<StyledContainer 
        onClick={handleClose}
        css={css`
        animation:${toastState ? SlideIn : SlideOut} 0.5s ease;
    `}>
        <ImageComponent width={24} height={24} fill="white"/>
        {children}
    </StyledContainer>)
}

export default CustomToast;