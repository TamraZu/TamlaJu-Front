// @ts-nocheck
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import Header from 'components/common/Header'
import MyPageCard from 'components/MyPage/MyPageCard'
import MyPageContainer from 'components/MyPage/MyPageContainer'
import NavBar from 'components/common/NavBar'
import { getMyPage } from 'apis'
import MyPageNoData from 'components/MyPage/MyPageNoData'

type AlcoholData = { alcoholId: number; name: string; imageUrl: string }

type MyPageData = {
  memberId: number
  nickname: string
  count: number
  alcohols: AlcoholData[]
}

function MyPage() {
  const [myPageData, setMyPageData] = useState<MyPageData>({
    memberId: 1,
    nickname: '탐라주',
    count: 1,
    alcohols: [
      {
        alcoholId: 11,
        name: '밀주',
        imageUrl:
          'https://tamrazu-bucket.s3.ap-northeast-2.amazonaws.com/alcohol/Makgeolli_1_%E1%84%86%E1%85%B5%E1%86%AF%E1%84%8C%E1%85%AE.png',
      },
    ],
  })
  useEffect(() => {
    async function fetchData() {
      const data = await getMyPage(1)
      setMyPageData(data)
    }
    fetchData()
  }, [myPageData])

  if (myPageData?.count === 0) {
    return <MyPageNoData />
  }

  return (
    <>
      <StyledMyPageLayout>
        <Header>나의 기록</Header>
        <MyPageContainer>
          {myPageData.alcohols?.map((elem, id) => {
            return <MyPageCard key={id} imageUrl={elem?.imageUrl ?? ''} name={elem?.name ?? ''} />
          })}
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
