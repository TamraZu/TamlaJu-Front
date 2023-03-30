import React from 'react'
import styled from '@emotion/styled'
import { ReactComponent as AteCookieIcon } from 'atoms/icons/AteCookieIcon.svg'
export interface ListCardProps {
  drink: {
    drinkImage: string
    drinkName: string
    drinkSize: number
    drinkLevel: number
    drinkPrice: number
    drinkAteCount: number
    drinkIsAte: boolean
  }
}

function ListCard({ drink }: ListCardProps) {
  return (
    <CardContainer>
      <CardImage>
        <img src={drink.drinkImage} alt="술 이미지" />
      </CardImage>
      <CardContent>
        <CardLeft>
          <CardTitle>{drink.drinkName}</CardTitle>
          <CardInfo>{`${drink.drinkSize}ml | ${drink.drinkLevel}도`}</CardInfo>
          <CardInfo>{drink.drinkPrice}원</CardInfo>
        </CardLeft>
        <CardRight>
          <CardButton>
            <AteCookieIcon width={24} height={24} fill={drink.drinkIsAte ? '#FFA5A5' : '#fffff'} />
          </CardButton>
          <CardCount>{drink.drinkAteCount}</CardCount>
        </CardRight>
      </CardContent>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  width: 360px;
  height: 120px;
  display: flex;
  background: #d9d9d9;
`

const CardImage = styled.div`
  flex: 1;
  width: 90px;
  height: 90px;
  img {
    object-fit: cover;
  }
`

const CardContent = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-around;
  align-items: start;
  padding-top: 12px;
`

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
`
const CardTitle = styled.h1`
  font-weight: 800;
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 15px;
`

const CardInfo = styled.div`
  font-weight: 300;
  line-height: 130%;
  font-size: 15px;
`

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

const CardButton = styled.div`
  cursor: pointer;
`

const CardCount = styled.div`
  width: 13px;
  height: 13px;
  font-weight: 800;
  font-size: 10px;
  line-height: 130%;
  margin-top: 5px;
`

export default ListCard
