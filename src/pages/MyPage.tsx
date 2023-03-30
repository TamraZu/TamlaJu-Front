import styled from '@emotion/styled'
import React from 'react'
import Header from 'components/common/Header'
import MyPageCard from 'components/MyPage/MyPageCard'
import MyPageContainer from 'components/MyPage/MyPageContainer'
import NavBar from 'components/common/NavBar'

function MyPage() {
  return (
    <>
      <StyledMyPageLayout>
        <Header>나의 기록</Header>
        <MyPageContainer>
          <MyPageCard />
          <MyPageCard />
          <MyPageCard />
          <MyPageCard />
          <MyPageCard />
        </MyPageContainer>
      </StyledMyPageLayout>
      <NavBar />
    </>
  )
}

const StyledMyPageLayout = styled.div`
  padding: 0 16px;
`

export default MyPage
