import splash from 'atoms/png/OnboardingSplashArt.png'
import styled from '@emotion/styled'
import IconKakaoLogo from 'atoms/png/IconKakaoLogo_sm.png'

const { Kakao } = window

/*
 const fadeOut = keyframes`
     from, 50%{
         opacity: 0;
     }

     to, 90% {
         opacity: 1;
     }
*/

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  position: fixed;
`

const SubWrapper = styled.div`
  height: 100vh;
  aspect-ratio: 375 / 812;
  position: absolute;
  object-fit: contain;
  left: 50%;
  transform: translateX(-50%);
`

const SplashArt = styled.img``

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  bottom: 96px;
  left: 50%;
  width: calc(100% - 48px);
  transform: translateX(-50%);
`
const StyledButton = styled.button`
  background-color: #fee500;
  width: 100%;
  height: 48px;
  border-radius: 24px;
`

/* const GuestButton = styled.button`
    background-color : #e2e2e2;
    width:100%;
    height: 48px;
    color: black;
    border-radius:12px;

` */

const Header = styled.h1`
  color: white;
  font-size: 16px;
  text-align: center;
  color: #000;
`

const KakaoLogo = styled.img`
  display: inline;
  margin: 0 10px;
`

export default function Onboard() {
  const LoginviaKakao = () => {
    // APP KEY 입력
    Kakao.Auth.authorize({
      redirectUri: `${process.env.REACT_APP_FRONTEND_BASE_URL}/login/kakao`,
      scope: 'profile_nickname,account_email,profile_image',
    })
  }

  /* const LoginviaGuest = () => {
        setCookie('authorization', 'guest', 1);
    } */

  return (
    <Wrapper>
      <SubWrapper>
        <SplashArt src={splash} />

        <ButtonWrapper>
          {/* <Link to='/home' onClick={LoginviaGuest}>
                        <GuestButton>
                            게스트로 둘러보기
                        </GuestButton>
                    </Link> */}
          <StyledButton onClick={LoginviaKakao}>
            <Header>
              <KakaoLogo src={IconKakaoLogo} alt="Kakao Logo" />
              카카오로 시작하기
            </Header>
          </StyledButton>
        </ButtonWrapper>
      </SubWrapper>
    </Wrapper>
  )
}
