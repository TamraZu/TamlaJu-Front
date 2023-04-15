import styled from '@emotion/styled'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return <StyledLayout>{children}</StyledLayout>
}

export default Layout

const StyledLayout = styled.div`
  max-width: 375px;
  height: 100vh;
  margin: 0 auto;
  user-select:none;
`
