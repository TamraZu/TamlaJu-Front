import { ReactComponent as IsDrinkedSadIcon } from 'atoms/icons/IsDrinkedSadIcon.svg'
import { ReactComponent as IsDrinkedInverse } from 'atoms/icons/IsDrinkedInversed.svg'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

function DetailAteButton() {
  const navigate = useNavigate()
  return (
    <StyledButton onClick={() => navigate('/list')}>
      {/* <StyledIconBG> */}
        <IsDrinkedInverse width={24} height={24} fill="#fd6e21" />
      {/* </StyledIconBG> */}
      <StyledText>제주 술 보러가기</StyledText>
    </StyledButton>
  )
}

function MyPageNoData() {
  return (
    <>
      <Wrapper>
        <IsDrinkedSadIcon width={80} height={80} />
        <StyledHeader>술기록이 존재하지 않아요</StyledHeader>
        <StyledParagraph>전통주를 보러 가볼까요?</StyledParagraph>
        <DetailAteButton />
      </Wrapper>
    </>
  )
}

export default MyPageNoData

const StyledButton = styled.div`
  cursor: pointer;
  width: 196px;
  height: 48px;
  display: flex;
  justify-content: center;

  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  background: #fd6e21;
  border-radius: 24px;
  margin-top: 27px;
`

const StyledText = styled.div`
  color: white;
`

const StyledHeader = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #858899;
`
const StyledParagraph = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #858899;
`

const StyledIconBG = styled.div`
  background-color:#ffffff;
  border-radius:50%;
  width:20px;
  height:20px;
  margin: 2px 2px;
`

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  height:calc(100vh - 128px);
  width:100%;
  justify-content:center;
  align-items:center;
`
