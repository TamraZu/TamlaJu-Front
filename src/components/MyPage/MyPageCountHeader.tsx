import React from 'react'
import styled from '@emotion/styled'

interface HeaderProps {
  count: number
}

function MyPageCountHeader({ count }: HeaderProps) {
  return <StyledHeader>{count}개의 제주술을 마셔봤어요</StyledHeader>
}

const StyledHeader = styled.header`
  margin-top: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.003em;
  height: 30px;
`

export default MyPageCountHeader
