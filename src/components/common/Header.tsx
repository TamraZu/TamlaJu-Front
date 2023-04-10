import React from 'react'
import styled from '@emotion/styled'

interface HeaderProps {
  children: string
}

function Header({ children }: HeaderProps) {
  return <StyledHeader>{children}</StyledHeader>
}

const StyledHeader = styled.header`
  display:inline-block;
  font-weight: 800;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: -0.003em;
  height: 34px;
`

export default Header
