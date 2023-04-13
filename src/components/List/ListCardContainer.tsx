import React from 'react'
import styled from '@emotion/styled'

interface ListCardContainerProps {
  children: React.ReactNode
}

function ListCardContainer({ children }: ListCardContainerProps) {
  return <StyledListCardContainer>{children}</StyledListCardContainer>
}

const StyledListCardContainer = styled.div`
  margin-top: 12px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom:16px;
  height: calc(100vh - 210px);
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
  }
`

export default ListCardContainer
