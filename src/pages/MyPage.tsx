import styled from '@emotion/styled'
import Header from 'components/common/Header'
import MyPageCard from 'components/MyPage/MyPageCard'
import MyPageContainer from 'components/MyPage/MyPageContainer'
import NavBar from 'components/common/NavBar'
import MyPageNoData from 'components/MyPage/MyPageNoData'
import MyPageCountHeader from 'components/MyPage/MyPageCountHeader'
import HasAuth from 'components/auth/Auth'
import { useAlcoholMyPage } from 'components/hooks/useAlcoholMyPage'

function MyPage() {
  HasAuth()
  const myPageData = useAlcoholMyPage()

  return (
    <>
      <StyledMyPageLayout>
        <Header>나의 기록</Header>
        <MyPageCountHeader count={myPageData.count} />
        <MyPageContainer>
          {myPageData.count === 0 ? (
            <MyPageNoData />
          ) : (
            myPageData.alcohols?.map(elem => {
              return (
                <MyPageCard
                  key={elem.alcoholId}
                  imageUrl={elem?.imageUrl ?? ''}
                  name={elem?.name ?? ''}
                  alcoholId={elem.alcoholId}
                />
              )
            })
          )}
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
