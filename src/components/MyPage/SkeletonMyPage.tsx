import React from 'react'
import Skeleton from 'components/common/Skeleton'
import styled from '@emotion/styled'

function SkeletonMyPageCard() {
  return <SkeletonMyPageCardLayout></SkeletonMyPageCardLayout>
}

function SkeletonMyPage() {
  return (
    <>
      <SkeletonMyPageHeader />
      <SkeletonMyPageCardContainer>
        <SkeletonMyPageCard />
        <SkeletonMyPageCard />
        <SkeletonMyPageCard />
        <SkeletonMyPageCard />
        <SkeletonMyPageCard />
        <SkeletonMyPageCard />
        <SkeletonMyPageCard />
        <SkeletonMyPageCard />
        <SkeletonMyPageCard />
      </SkeletonMyPageCardContainer>
    </>
  )
}

const SkeletonMyPageHeader = styled(Skeleton)`
  margin-top: 24px;
  line-height: 30px;
`

const SkeletonMyPageCardContainer = styled.div`
  margin-top: 16px;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(3, 108px);
  grid-template-rows: repeat(3, 180px);
  justify-content: space-around;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 70vh;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
  }
`

const SkeletonMyPageCardLayout = styled(Skeleton)`
  box-sizing: border-box;
  width: 108px;
  height: 180px;
  border-radius: 16px;
  padding: 10px 10px 0px 10px;
`

export default SkeletonMyPage
