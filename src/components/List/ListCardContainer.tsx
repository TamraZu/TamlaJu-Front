import React from 'react'
import styled from '@emotion/styled'

interface ListCardContainerProps {
  children: React.ReactNode
}

function ListCardContainer({ children }: ListCardContainerProps) {
  return <StyledListCardContainer>{children}</StyledListCardContainer>
}

const StyledListCardContainer = styled.div`
  margin-top: 16px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 65vh;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
  }
`

export default ListCardContainer
