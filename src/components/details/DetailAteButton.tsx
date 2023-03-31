import React from 'react'
import styled from '@emotion/styled'
import { ReactComponent as IsDrinkedWhiteIcon } from 'atoms/icons/IsDrinkedWhiteIcon.svg'
import { postEatingCount } from 'apis'
import { useNavigate } from 'react-router-dom'

interface DetailAteButtonProps {
  alcoholId: number
  memberId: number
}

function DetailAteButton({ alcoholId, memberId }: DetailAteButtonProps) {
  const navigate = useNavigate()
  return (
    <StyledButton
      onClick={() => postEatingCount(memberId, alcoholId).then(res => navigate('/list'))}
    >
      <IsDrinkedWhiteIcon width={24} height={24} />
      <StyledText>마셔봤어요</StyledText>
    </StyledButton>
  )
}

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

export default DetailAteButton
