import styled from '@emotion/styled'
import { ReactComponent as IsDrinkedDetailIcon } from 'atoms/icons/IsDrinkedWhiteIcon.svg'
import { usePutHasAte } from 'components/hooks/usePutHasAte'

interface DetailAteButtonProps {
  alcoholId: number
  hasAte: boolean
  category: string
}

function DetailAteButton({ alcoholId, hasAte, category }: DetailAteButtonProps) {
  const mutate = usePutHasAte(category)

  const detailClickHandler = () => mutate(alcoholId)
  return (
    <StyledButton hasAte={hasAte} onClick={detailClickHandler}>
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
