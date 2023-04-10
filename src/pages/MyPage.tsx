import styled from '@emotion/styled'
import Header from 'components/common/Header'
import MyPageCard from 'components/MyPage/MyPageCard'
import MyPageContainer from 'components/MyPage/MyPageContainer'
import NavBar from 'components/common/NavBar'
import MyPageNoData from 'components/MyPage/MyPageNoData'
import MyPageCountHeader from 'components/MyPage/MyPageCountHeader'
import HasAuth from 'components/auth/Auth'
import { useAlcoholMyPage } from 'components/hooks/useAlcoholMyPage'
import KakaoLogout from 'components/auth/KakaoLogout'

function MyPage() {
  HasAuth()
  const myPageData = useAlcoholMyPage()

  return (
    <>
      <StyledMyPageLayout>
        <TopBar>
        <Header>나의 기록</Header>
        <KakaoLogout/>
        </TopBar>
        {myPageData.count === 0 ?
          <MyPageNoData />
          : (<>
          <MyPageCountHeader count={myPageData.count} />
          <MyPageContainer>
              {myPageData.alcohols?.map(elem => {
                return (
                  <MyPageCard
                    key={elem.alcoholId}
                    imageUrl={elem?.imageUrl ?? ''}
                    name={elem?.name ?? ''}
                    alcoholId={elem.alcoholId} />
                )
              })}
            </MyPageContainer>
            </>)}
      </StyledMyPageLayout>
      <NavBar />
    </>
  )
}

const StyledMyPageLayout = styled.div`
  padding: 0 16px;
`

const TopBar = styled.div`
  margin-top: 44px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

export default MyPage
