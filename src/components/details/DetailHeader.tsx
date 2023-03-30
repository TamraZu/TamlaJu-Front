import React from 'react'
import { ReactComponent as BackIcon } from 'atoms/icons/BackIcon.svg'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'

function DetailHeader() {
  const navigate = useNavigate()
  return (
    <StyledDetailHeader>
      <BackIcon width={12} height={20} style={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
    </StyledDetailHeader>
  )
}

const StyledDetailHeader = styled.div`
  width: 100%;
  margin-top: 36px;
`

export default DetailHeader
