import styled from '@emotion/styled'
import Skeleton from 'components/common/Skeleton'

function SkeletonCard() {
  return (
    <SkeletonCardContainer>
      <SkeletonCardImage />
      <SkeletonCardContent>
        <SkeletonCardLeft>
          <SkeletonCardTitle />
          <SkeletonCardInfo />
          <SkeletonCardPrice />
        </SkeletonCardLeft>
        <SkeletonCardRight>
          <SkeletonCardButton />
          <SkeletonCardCount />
        </SkeletonCardRight>
      </SkeletonCardContent>
    </SkeletonCardContainer>
  )
}

function SkeletonCardList() {
  return (
    <>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </>
  )
}

export default SkeletonCardList

const SkeletonCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
  display: flex;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 8px;
`

const SkeletonCardImage = styled(Skeleton)`
  width: 96px;
  height: 96px;
`

const SkeletonCardContent = styled.div`
  display: flex;
  padding-top: 12px;
  margin-left: 16px;
`

const SkeletonCardLeft = styled.div`
  position: absolute;
  left: 125px;
`
const SkeletonCardTitle = styled(Skeleton)`
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  width: 200px;
  height: 28px;
  margin-bottom: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
`

const SkeletonCardInfo = styled(Skeleton)`
  font-weight: 300;
  line-height: 22px;
  font-size: 14px;
  height: 22px;
  margin-top: -10px;
  width: 100px;
`
const SkeletonCardPrice = styled(Skeleton)`
  height: 24px;
  margin-top: 8px;
  font-weight: 700;
  line-height: 24px;
  width: 100px;
`

const SkeletonCardRight = styled.div`
  position: absolute;
  right: 19px;
  bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const SkeletonCardButton = styled(Skeleton)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

const SkeletonCardCount = styled(Skeleton)`
  width: 21px;
  height: 24px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  line-height: 130%;
  margin-left: 4px;
`
