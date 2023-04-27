import React from 'react'
import styled from '@emotion/styled'
import DetailAteButton from 'components/details/DetailAteButton'
import DetailInfoContainer from 'components/details/DetailInfoContainer'
import { useAlcoholDetail } from 'components/hooks/useAlcoholDetail'

interface DetailCardProps {
  alcoholId: number
}

function DetailCard({ alcoholId }: DetailCardProps) {
  const alcoholDetail = useAlcoholDetail(alcoholId)

  return (
    <>
      <DetailImageBox>
        <img src={alcoholDetail?.imageUrl} alt="상세 술 이미지" />
      </DetailImageBox>
      <DetailTitle>
        <DetailCategory>{alcoholDetail?.category}</DetailCategory>
        <DetailName>{alcoholDetail?.name}</DetailName>
      </DetailTitle>
      <DetailInfoContainer detailData={alcoholDetail} />
      <DetailTastingNote>테이스팅 노트</DetailTastingNote>
      <DetailTastingInfo>
        <DetailTastingImage>
          <img src={alcoholDetail.tasteImage} alt="테이스팅 노트 이미지" />
        </DetailTastingImage>
        <DetailTastingDescription>{alcoholDetail.description}</DetailTastingDescription>
      </DetailTastingInfo>
      <DetailAteButton
        alcoholId={alcoholDetail.alcoholId}
        hasAte={alcoholDetail.hasAte}
        category={alcoholDetail.category}
      />
    </>
  )
}

const DetailImageBox = styled.div`
  width: 340px;
  height: 340px;
  margin: 0 auto;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;
  }
`

const DetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;
  height: 50px;
  margin-top: 8px;
  margin-bottom: 8px;
`
const DetailCategory = styled.div`
  color: #fd6e21;
  line-height: 20px;
  font-weight: 500;
  height: 20px;
`
const DetailName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`

const DetailTastingNote = styled.div`
  height: 28px;
  font-size: 18px;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 4px;
  font-weight: 700;
`

const DetailTastingInfo = styled.div`
  width: 340px;
  background: #fff7f0;
  border: 1px solid #ffe9d4;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DetailTastingImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 20px;
  background-color: white;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

const DetailTastingDescription = styled.div`
  padding: 10px 16px 13px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  width: 100%;
  white-space: pre-line;
  word-break: keep-all;
`

export default DetailCard
