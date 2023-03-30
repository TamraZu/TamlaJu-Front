import React from 'react'
import styled from '@emotion/styled'

function MyPageCard() {
  return (
    <MyPageCardLayout>
      <MyPageImageBox>
        <img src="" alt="기본 이미지" />
      </MyPageImageBox>
      <MyPageAlcoholName>제주샘 니모메</MyPageAlcoholName>
    </MyPageCardLayout>
  )
}

const MyPageCardLayout = styled.div`
  box-sizing: border-box;
  width: 108px;
  height: 180px;
  background: #fff8e1;
  border: 1px solid #fbeec3;
  border-radius: 16px;
  padding: 10px 10px 0px 10px;
`

const MyPageImageBox = styled.div`
  margin: 0 auto;
  background: #ffffff;
  border-radius: 12px;
  width: 90px;
  height: 110px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const MyPageAlcoholName = styled.div`
  margin: 16px auto;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  width: 90px;
  height: 24px;
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`

export default MyPageCard
