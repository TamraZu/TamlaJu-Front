import styled from '@emotion/styled'
import { ReactComponent as ViewMoreIcon } from 'atoms/icons/ViewMoreIcon.svg'
import { useNavigate } from 'react-router'

function ViewMoreButton() {
  const navigate = useNavigate()

  return (
    <>
      <StyledButton onClick={() => navigate('/list')}>
        <ViewMoreIcon width={24} height={24} />
        <StyledText>전통주 더보기</StyledText>
      </StyledButton>
    </>
  )
}

const StyledButton = styled.div`
  cursor: pointer;
  width: 180px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  background-color: #fd6e21;
  border-radius: 24px;
  margin: 27px auto;
`

const StyledText = styled.div`
  color: white;
`

export default ViewMoreButton
