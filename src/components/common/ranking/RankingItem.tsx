import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { alcoholType, drinkType } from 'types/drinkType'

const CardContainer = styled.div`
  width: 343px;
  height: 88px;
  display: flex;
  border-radius: 16px;
  padding: 8px 16px;
  margin-bottom: 8px;
  background: #FFF7F0;
  border: #FFE9D4 1px solid;
  align-items: center;
`

const CardNumber = styled.div`
    margin-right: 8px;
    font-weight:700;
    font-size:28px;
    letter-spacing: -0.003em;

`

const CardImage = styled.img`
  cursor: pointer;
  width: 64px;
  height: 64px;
  margin-right: 14px;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

const CardTitle = styled.h1`
  cursor: pointer;
  width: 200px;
  display: inline-block; 
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap; 
  font-weight: 800;
  font-size: 20px;
  line-height: 120%;
`

const CardInfo = styled.div`
  font-weight: 300;
  line-height: 130%;
  font-size: 13px;
  margin-bottom: 2px;
  color:#858899;
`

const CardCount = styled.div`
  font-weight: 500;
  font-size: 13px;
  letter-spacing: -0.003em;
  text-align: center;
`
interface RankingItemInterface {
  prop: drinkType,
  index: number
}

export default function RankingItem({ prop, index }: RankingItemInterface) {
  return (
    <Link to={`/details/${prop.alcoholId}`}>
      <CardContainer>
        <CardNumber>{index}</CardNumber>
        <CardImage src={prop.imageUrl}>
        </CardImage>
        <CardContent>
          <CardTitle>{prop.name}</CardTitle>
          <CardInfo>{prop.address}</CardInfo>
            <CardCount>{prop.ateCount + '명이 즐겼어요😍'}</CardCount>
            
        </CardContent>
      </CardContainer>
    </Link>
  )
}