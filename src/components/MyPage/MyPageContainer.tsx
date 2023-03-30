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
  grid-gap: 6px;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  align-items: center;
  justify-content: space-around;
`

export default MyPageContainer
