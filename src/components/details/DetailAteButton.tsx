import styled from '@emotion/styled'
import { useState } from 'react';
import { ReactComponent as IsDrinkedDetailIcon } from 'atoms/icons/IsDrinkedWhiteIcon.svg'
import { ReactComponent as IsDrinkedSadIcon } from 'atoms/icons/IsDrinkedSadIcon.svg'
import { putEatingCount } from 'apis'
import { useNavigate } from 'react-router-dom'

interface DetailAteButtonProps {
  alcoholId: number
  memberId: string
  hasAte: boolean
}

function DetailAteButton({ alcoholId, memberId, hasAte }: DetailAteButtonProps) {
  const navigate = useNavigate()
  const [ate, setAte] = useState(hasAte);
  return (
    <StyledButton
      hasAte={ate}
      onClick={() => putEatingCount(alcoholId).then(() => { setAte(!ate) })}
    >

      {ate
        ? <IsDrinkedDetailIcon width={24} height={24} fill={'#fd6e21'} />
        : <IsDrinkedSadIcon rotate={'15'} width={24} height={24} fill={'#000000'} />}
      <StyledText hasAte={ate}>{ate ? '마셔봤어요' : '아직 안 마셨어요'}</StyledText>
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
  width: ${props => (props.hasAte ? '161px' : '196px')};
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  background-color: ${props => (props.hasAte ? '#fd6e21' : ' #858899')};
  border-radius: 24px;
  margin: 27px auto;
`

const StyledText = styled.div<DetailAteBtnTextProps>`
  color: white;
`

export default DetailAteButton
