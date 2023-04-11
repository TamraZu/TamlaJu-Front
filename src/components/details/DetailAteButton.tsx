import styled from '@emotion/styled'
import { useState } from 'react';
import { ReactComponent as IsDrinkedDetailIcon } from 'atoms/icons/IsDrinkedWhiteIcon.svg'
import { ReactComponent as ProfileIcon } from 'atoms/icons/ProfileIcon.svg';
import { putEatingCount } from 'apis'
import CustomToast from 'components/common/CustomToast';

interface DetailAteButtonProps {
  alcoholId: number
  memberId: string
  hasAte: boolean
}

function DetailAteButton({ alcoholId, memberId, hasAte }: DetailAteButtonProps) {
  const [ate, setAte] = useState(hasAte);


  return (
    <>
      <CustomToast delay={3000} ImageComponent={ProfileIcon}>나의 기록에 추가됐어요</CustomToast>
      <StyledButton
        hasAte={ate}
        onClick={() => putEatingCount(alcoholId).then(() => {
          setAte(!ate)
        })}
      >

        {ate
          ? <IsDrinkedDetailIcon width={24} height={24} fill={'#fd6e21'} />
          : <IsDrinkedDetailIcon width={24} height={24} fill={'#A9ABB8'} />}
        <StyledText hasAte={ate}>{ate ? '마셔본 술이에요' : '아직 안 마셨어요'}</StyledText>
      </StyledButton>
    </>
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
  width: 196px;
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

const StyledDiv = styled.div`
  width:100%;
  display:flex;
  gap:8px;
  align-items:center;
  justify-content:center;
`

export default DetailAteButton
