import React from 'react'
import styled from '@emotion/styled'
import { DetailPageAlcoholType } from 'types/DrinkType'

interface DetailInfoContainerProps {
  detailData: DetailPageAlcoholType
}

function DetailInfoContainer({ detailData }: DetailInfoContainerProps) {
  return (
    <StyledContainer>
      <DetailInfo>
        <DetailInfoKey>가격 </DetailInfoKey>
        <DetailInfoValue>{detailData.price}원</DetailInfoValue>
      </DetailInfo>
      <DetailInfo>
        <DetailInfoKey>생산자</DetailInfoKey>
        <DetailInfoValue>{detailData.factory}</DetailInfoValue>
      </DetailInfo>
      <DetailInfo>
        <DetailInfoKey>지역 </DetailInfoKey>
        <DetailInfoValue>{detailData.region}</DetailInfoValue>
      </DetailInfo>
      <DetailInfo>
        <DetailInfoKey>용량</DetailInfoKey>
        <DetailInfoValue>{detailData.volume}ml</DetailInfoValue>
      </DetailInfo>
      <DetailInfo>
        <DetailInfoKey>도수 </DetailInfoKey>
        <DetailInfoValue>{detailData.level}도</DetailInfoValue>
      </DetailInfo>
      <DetailInfo>
        <DetailInfoKey>품종 </DetailInfoKey>
        <DetailInfoValue>{detailData.category}</DetailInfoValue>
      </DetailInfo>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  margin-top: 8px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e8e8ee;
`

const DetailInfo = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0;
  gap: 30px;
  height: 24px;
`
const DetailInfoKey = styled.div`
  color: #858899;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  width: 48px;
  height: 24px;
  letter-spacing: -0.003em;
`

const DetailInfoValue = styled.div`
  height: 50px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.003em;
`

export default DetailInfoContainer
