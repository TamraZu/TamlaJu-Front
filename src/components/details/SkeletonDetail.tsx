import Skeleton from 'components/common/Skeleton'
import styled from '@emotion/styled'
import SkeletonButton from './SkeletonButton'

function SkeletonDetail() {
  return (
    <>
      <SkeletonImageBox />
      <SkeletonTitle>
        <SkeletonCategory />
        <SkeletonName />
      </SkeletonTitle>
      <SkeletonDetailInfoContainer>
        <SkeletonDetailInfo>
          <SkeletonDetailInfoKey />
          <SkeletonDetailInfoValue />
        </SkeletonDetailInfo>
        <SkeletonDetailInfo>
          <SkeletonDetailInfoKey />
          <SkeletonDetailInfoValue />
        </SkeletonDetailInfo>
        <SkeletonDetailInfo>
          <SkeletonDetailInfoKey />
          <SkeletonDetailInfoValue />
        </SkeletonDetailInfo>
        <SkeletonDetailInfo>
          <SkeletonDetailInfoKey />
          <SkeletonDetailInfoValue />
        </SkeletonDetailInfo>
        <SkeletonDetailInfo>
          <SkeletonDetailInfoKey />
          <SkeletonDetailInfoValue />
        </SkeletonDetailInfo>
        <SkeletonDetailInfo>
          <SkeletonDetailInfoKey />
          <SkeletonDetailInfoValue />
        </SkeletonDetailInfo>
      </SkeletonDetailInfoContainer>
      <SkeletonTastingNote />
      <SkeletonTastingInfo>
        <SkeletonDetailTastingImage />
        <SkeletonDetailTastingDescription />
      </SkeletonTastingInfo>
      <SkeletonButton />
    </>
  )
}

const SkeletonImageBox = styled(Skeleton)`
  width: 340px;
  height: 340px;
  margin: 0 auto;
  margin-top: 24px;
`

const SkeletonTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;
  height: 50px;
  margin-top: 8px;
  margin-bottom: 8px;
`

const SkeletonCategory = styled(Skeleton)`
  line-height: 20px;
  font-weight: 500;
  height: 20px;
`

const SkeletonName = styled(Skeleton)``

const SkeletonDetailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  margin-top: 8px;
  padding-bottom: 16px;
`

const SkeletonDetailInfo = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0;
  gap: 30px;
  height: 24px;
`

const SkeletonDetailInfoKey = styled(Skeleton)`
  width: 48px;
  height: 24px;
`

const SkeletonDetailInfoValue = styled(Skeleton)`
  width: 60px;
  height: 50px;
`

const SkeletonTastingNote = styled(Skeleton)`
  height: 28px;
  font-size: 18px;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 4px;
  font-weight: 700;
`

const SkeletonTastingInfo = styled.div`
  width: 340px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SkeletonDetailTastingImage = styled(Skeleton)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 20px;
`

const SkeletonDetailTastingDescription = styled(Skeleton)`
  padding: 10px 16px 13px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  width: 100%;
  white-space: pre-line;
  word-break: keep-all;
`

export default SkeletonDetail
