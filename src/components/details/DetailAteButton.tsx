import styled from '@emotion/styled'
import { ReactComponent as IsDrinkedDetailIcon } from 'atoms/icons/IsDrinkedDetailIcon.svg'
import { postEatingCount } from 'apis'
import { useNavigate } from 'react-router-dom'

interface DetailAteButtonProps {
  alcoholId: number
  memberId: string
  ateCount: number
}

function DetailAteButton({ alcoholId, memberId, hasAte }: DetailAteButtonProps) {
  const navigate = useNavigate()
  return (
    <StyledButton
      hasAte={hasAte}
      onClick={() => postEatingCount(memberId, alcoholId).then(res => navigate('/list'))}
    >
      <IsDrinkedDetailIcon width={24} height={24} fill={hasAte ? '#fd6e21' : '#858899'} />
      <StyledText hasAte={hasAte}>{hasAte ? '마셔봤어요' : '아직 안 마셨어요'}</StyledText>
    </StyledButton>
  )
}

type DetailAteBackgroundProps = {
  onClick: () => void
  hasAte: boolean
}

type DetailAteBtnTextProps = {
  hasAte: boolean
}

const StyledButton = styled.div<DetailAteBackgroundProps>`
  cursor: pointer;
  width: 340px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  background-color: ${props => (props.hasAte ? '#fd6e21' : ' #858899')};
  border-radius: 8px;
  margin-top: 27px;
`

const StyledText = styled.div<DetailAteBtnTextProps>`
  color: white;
`

export default DetailAteButton
