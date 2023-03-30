import styled from '@emotion/styled'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as DrinkIcon } from 'atoms/icons/DrinkIcon.svg'
import { ReactComponent as MapIcon } from 'atoms/icons/MapIcon.svg'
import { ReactComponent as ProfileIcon } from 'atoms/icons/ProfileIcon.svg'

function NavBar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <Container>
      <NavBox>
        <nav>
          <NavLink to={'/'}>
            <MapIcon width="20" height="20" fill={pathname === '/' ? '#09121F' : 'blue'} />
          </NavLink>
        </nav>
        <nav>
          <NavLink to={'/list'}>
            <DrinkIcon width="20" height="20" fill={pathname === '/list' ? '#09121F' : 'blue'} />
          </NavLink>
        </nav>
        <nav>
          <NavLink to={'/mypage'}>
            <ProfileIcon
              width="20"
              height="20"
              fill={pathname === '/mypage' ? '#09121F' : 'blue'}
            />
          </NavLink>
        </nav>
      </NavBox>
    </Container>
  )
}

export default NavBar

const Container = styled.div`
  position: fixed;
  bottom: 15px;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 430px;
  width: 100%;
  border-top: 1px solid black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.04);
  background: #fdf9f1;
`
const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 95px;
  flex: 1;
  height: 80px;
  /* background: linear-gradient(180deg, #0b0711 0%, rgba(11, 7, 17, 0.9) 100%); */
  border-radius: 30px 30px 0px 0px;
  margin: auto;
  nav {
    cursor: pointer;
  }
`
