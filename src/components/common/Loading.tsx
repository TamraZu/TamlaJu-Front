import React from 'react'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

function Loading() {
  return (
    <Container>
      <LoadingSpinner />
    </Container>
  )
}

export default Loading

const spin = keyframes`
  to {
    transform:rotate(360deg)
  }
`

const Container = styled.div`
  width: 80px;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
`

const LoadingSpinner = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border: 7px solid white;
  border-radius: 50%;
  border-top-color: #fd6e21
  animation: ${spin} 1s linear infinite;
`
