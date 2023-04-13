import styled from '@emotion/styled'
import { useEffect, useState } from 'react';
import { ReactComponent as IsDrinkedDetailIcon } from 'atoms/icons/IsDrinkedWhiteIcon.svg'
import { ReactComponent as ProfileIcon } from 'atoms/icons/ProfileIcon.svg';
import { useToast } from 'components/hooks/useToast';
import { getNewUID } from 'util/getUID';
import useDidMountEffect from 'components/hooks/useDidMountEffect';
import { usePutHasAte } from 'components/hooks/usePutHasAte'

interface DetailAteButtonProps {
  alcoholId: number
  hasAte: boolean
  category: string
}


function DetailAteButton({ alcoholId, memberId, hasAte }: DetailAteButtonProps) {
  const [ate, setAte] = useState(hasAte);
  const { fireToast } = useToast();
  
  const mutate = usePutHasAte(category)
  const detailClickHandler = () => mutate(alcoholId)

  useDidMountEffect(() => {
    if (ate) {
      fireToast({
        id: getNewUID(),
        children: '나의 기록에 추가됐어요',
        duration: 1000,
        ImageComponent: ProfileIcon
      })
    }
  }, [ate])

  // 이거 삭제할 예정.
  useEffect(() => {
    setAte(hasAte);
  },[])

  return (
    <>
      <StyledButton
        hasAte={ate}
        onClick={() => {
        detailClickHandler();
        setAte(!ate)
        }
      >

        <IsDrinkedDetailIcon width={24} height={24} fill={ate ? '#fd6e21' : '#A9ABB8'} />
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
