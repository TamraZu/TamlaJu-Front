import React from 'react'
import styled from '@emotion/styled'

function DetailInfoContainer() {
  return (
    <StyledContainer>
      <DetailInfo>
        <DetailInfoKey>가격 </DetailInfoKey>
        <DetailInfoValue>13000원</DetailInfoValue>
      </DetailInfo>
      <DetailInfo>
        <DetailInfoKey>생산자</DetailInfoKey>
        <DetailInfoValue>제주본초협동조합</DetailInfoValue>
      </DetailInfo>
      <DetailInfo>
        <DetailInfoKey>지역 </DetailInfoKey>
        <DetailInfoValue>제주시 한경면</DetailInfoValue>
      </DetailInfo>
      <DetailInfo>
        <DetailInfoKey>용량</DetailInfoKey>
        <DetailInfoValue>365ml</DetailInfoValue>
      </DetailInfo>
      <DetailInfo>
        <DetailInfoKey>도수 </DetailInfoKey>
        <DetailInfoValue>16도</DetailInfoValue>
      </DetailInfo>
      <DetailInfo>
        <DetailInfoKey>품종 </DetailInfoKey>
        <DetailInfoValue>기타주류</DetailInfoValue>
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
  letter-spacing: -0.003em;
`

const DetailInfoValue = styled.div`
  height: 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`

export default DetailInfoContainer
