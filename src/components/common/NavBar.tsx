import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

function NavBar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return <div>NavBar</div>
}

export default NavBar
