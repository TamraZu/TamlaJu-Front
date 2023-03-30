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
  margin: 0 auto;
`