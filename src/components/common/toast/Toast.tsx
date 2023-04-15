import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import React, { ReactNode, useEffect, useState } from 'react'
import { ToastInterface } from 'types/ToastInterface'
import { useToast } from 'components/hooks/useToast'

type ToastAnimationProps = {
  isClosing: boolean
}

const StyledContainer = styled.div`
  color: #fff;
  border-radius: 12px;
  background: #273a56;
  position: fixed;
  display: flex;
  gap: 8px;
  left: 50%;
  transform: translateX(-50%);
  top: 56px;
  width: 100%;
  max-width: 375px;
  height: 52px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  animation-fill-mode: backwards;
  animation: ${(props: ToastAnimationProps) =>
    props.isClosing
      ? css`
          ${SlideOut} 0.5s ease
        `
      : css`
          ${SlideIn} 0.5s ease
        `};
`

const SlideIn = keyframes`
    from {
        transform: translate(-50%,-250%);
    }
    to {
        transform: translate(-50%, 0);
    }
`

const SlideOut = keyframes`
    from {
        transform: translate(-50%, 0);
    }
    to {
        transform: translate(-50%,-250%);
    }
`

const Toast = ({ children, duration, ImageComponent }: ToastInterface) => {
  const [isClosing, setIsClosing] = useState(false)
  const handleClose = () => {
    setIsClosing(true)
  }

  const handleOpen = () => {
    setIsClosing(true)
  }

  useEffect(() => {
    const setExistTimeout = setTimeout(() => {
      setIsClosing(true)
      clearTimeout(setExistTimeout)
      console.log('close!', duration)
    }, duration ?? 1000)
  }, [])

  return (
    <StyledContainer
      // onClick={handleClose}
      isClosing={isClosing}
    >
      <ImageComponent width={24} height={24} fill="white" />
      {children}
    </StyledContainer>
  )
}

export default Toast
