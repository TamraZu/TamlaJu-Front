import { Suspense } from 'react'
import styled from '@emotion/styled'
import Header from 'components/common/Header'
import NavBar from 'components/common/NavBar'
import HasAuth from 'components/auth/Auth'
import KakaoLogout from 'components/auth/KakaoLogout'
import MyPageItem from 'components/MyPage/MyPageItem'
import SkeletonMyPage from 'components/MyPage/SkeletonMyPage'

function MyPage() {
  HasAuth()

  return (
    <>
      <StyledMyPageLayout>
        <TopBar>
          <Header>나의 기록</Header>
          <KakaoLogout />
        </TopBar>
        <Suspense fallback={<SkeletonMyPage />}>
          <MyPageItem />
        </Suspense>
      </StyledMyPageLayout>
      <NavBar />
    </>
  )
}

export const StyledMyPageLayout = styled.div`
  padding: 0 16px;
`

export const TopBar = styled.div`
  margin-top: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default MyPage
