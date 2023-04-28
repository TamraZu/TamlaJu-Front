import styled from '@emotion/styled'
import React from 'react'

interface MyPageContainerProps {
  children: React.ReactNode
}

function MyPageContainer({ children }: MyPageContainerProps) {
  return <StyledMyPageContainer>{children}</StyledMyPageContainer>
}

const StyledMyPageContainer = styled.div`
  margin-top: 16px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(3, 108px);
  grid-template-rows: repeat(3, 180px);
  justify-content: space-around;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 70vh;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
  }
`

export default MyPageContainer
