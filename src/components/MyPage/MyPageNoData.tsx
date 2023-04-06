import React from 'react'
import { ReactComponent as IsDrinkedSadIcon } from 'atoms/icons/IsDrinkedSadIcon.svg'
import { ReactComponent as IsDrinkedWhiteIcon } from 'atoms/icons/IsDrinkedWhiteIcon.svg'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

function DetailAteButton() {
  const navigate = useNavigate()
  return (
    <StyledButton onClick={() => navigate('/home')}>
      <IsDrinkedWhiteIcon width={24} height={24} />
      <StyledText>제주 술 보러가기</StyledText>
    </StyledButton>
  )
}

function MyPageNoData() {
  return (
    <>
      <IsDrinkedSadIcon width={80} height={80} />
      <div>술기록이 존재하지 않아요</div>
      <div>전통주를 보러 가볼까요?</div>
      <DetailAteButton />
    </>
  )
}

export default MyPageNoData

const StyledButton = styled.div`
  cursor: pointer;
  width: 340px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  background: #fd6e21;
  border-radius: 8px;
  margin-top: 27px;
`

const StyledText = styled.div`
  color: white;
`
