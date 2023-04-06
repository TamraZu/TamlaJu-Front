import styled from '@emotion/styled'
import { NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as DrinkIcon } from 'atoms/icons/DrinkIcon.svg'
import { ReactComponent as MapIcon } from 'atoms/icons/MapIcon.svg'
import { ReactComponent as ProfileIcon } from 'atoms/icons/ProfileIcon.svg'
import KakaoLogout from 'components/auth/KakaoLogout'

function NavBar() {
  const { pathname } = useLocation()

  return (
    <Container>
      <NavBox>
        <nav>
          <NavLink to={'/home'}>
            <MapIcon width="20" height="20" fill={pathname === '/home' ? '#09121F' : '#A9ABB8'} />
          </NavLink>
        </nav>
        <nav>
          <NavLink to={'/list'}>
            <DrinkIcon width="20" height="20" fill={pathname === '/list' ? '#09121F' : '#A9ABB8'} />
          </NavLink>
        </nav>
        <nav>
          <NavLink to={'/mypage'}>
            <ProfileIcon
              width="20"
              height="20"
              fill={pathname === '/mypage' ? '#09121F' : '#A9ABB8'}
            />
          </NavLink>
        </nav>
        <NavLink to="/">
          <KakaoLogout/>
        </NavLink>
      </NavBox>
    </Container>
  )
}

export default NavBar

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 430px;
  width: 100%;
  height: 50px;
  /* border-top: 1px solid black; */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.04);
  background: #ffffff;
`
const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 95px;
  padding-top: 10px;
  flex: 1;
  height: 30px;
  margin: auto;
  nav {
    cursor: pointer;
  }
`
