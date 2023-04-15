import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { DrinkType } from 'types/DrinkType'
import  DrinkIcon from 'atoms/icons/IsDrinkedIcon.svg'

export default function RankingItem({ prop, index }: RankingItemInterface) {
  return (
    <Link to={`/details/${prop.alcoholId}`}>
      <CardContainer>
        <CardNumber>{index}</CardNumber>
        <CardImage src={prop.imageUrl} width={64} height={64}/>
        <CardContent>
          <CardTitle>{prop.name}</CardTitle>
          <CardInfo>{prop.address}</CardInfo>
          <CardDetail>
            <IsDrinkIcon src={DrinkIcon} width={13} />
            <CardCount>{prop.ateCount ? prop.ateCount + '명이 즐겼어요' : prop.ateCount}</CardCount>
          </CardDetail>

        </CardContent>
      </CardContainer>
    </Link>
  )
}

const CardContainer = styled.div`
  width: 100%;
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
    flex-shrink:0;
    font-weight:700;
    font-size:28px;
    letter-spacing: -0.003em;
`

const CardImage = styled.img`
  cursor: pointer;
  flex-shrink:0;
  width: 64px;
  height: 64px;
  margin-right: 14px;
`

const CardContent = styled.div`
  display: flex;
  width:100%;
  flex-shrink:1;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

const CardTitle = styled.h1`
  cursor: pointer;
  flex-shrink: 1;
  min-width:0;
  width:100%;
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
  flex-shrink: 1;
  margin-bottom: 2px;
  color:#858899;
`

const CardCount = styled.div`
  font-weight: 500;
  font-size: 13px;
  flex-shrink: 1;
  letter-spacing: -0.003em;
  text-align: center;
`
const CardDetail = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const IsDrinkIcon = styled.img`
  fill:#525463;
  background-color:#525463;
  border-radius:50%;
  margin-right:5px;
`

interface RankingItemInterface {
  prop: DrinkType,
  index: number
}