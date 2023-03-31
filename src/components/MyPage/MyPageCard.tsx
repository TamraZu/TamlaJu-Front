import React from 'react'
import styled from '@emotion/styled'
import Stamp from 'atoms/png/stamp.png'

interface MyPageCardProps {
  imageUrl: string
  name: string
}

function MyPageCard({ imageUrl, name }: MyPageCardProps) {
  return (
    <MyPageCardLayout>
      <MyPageImageBox>
        <img src={imageUrl} alt="기본 이미지" />
        <StyledImage src="/stamp.png" width={10} height={10} alt="이밎" />
      </MyPageImageBox>
      <MyPageAlcoholName>{name}</MyPageAlcoholName>
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
const StyledImage = styled.img`
  z-index: 5;
  position: absolute;
  top: 0;
`

const MyPageImageBox = styled.div`
  position: relative;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 12px;
  width: 90px;
  height: 110px;
  border-radius: 24px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
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
