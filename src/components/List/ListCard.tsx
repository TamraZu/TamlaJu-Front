import React from 'react'
import styled from '@emotion/styled'
import { ReactComponent as IsDrinkedIcon } from 'atoms/icons/IsDrinkedIcon.svg'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  return (
    <CardContainer>
      <CardImage onClick={() => navigate(`/details/${drink.drinkName}`)}>
        <img src={drink.drinkImage} alt="술 이미지" />
      </CardImage>
      <CardContent>
        <CardLeft>
          <CardTitle onClick={() => navigate(`/details/${drink.drinkName}`)}>
            {drink.drinkName}
          </CardTitle>
          <CardInfo>{`${drink.drinkSize}ml | ${drink.drinkLevel}도`}</CardInfo>
          <CardPrice>{drink.drinkPrice}원</CardPrice>
        </CardLeft>
        <CardRight>
          <CardButton>
            <IsDrinkedIcon width={32} height={32} fill={'#FD6E21'} />
          </CardButton>
          <CardCount>{drink.drinkAteCount}</CardCount>
        </CardRight>
      </CardContent>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  width: 340px;
  height: 130px;
  display: flex;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 8px;
  background: #ffe9d4;
`

const CardImage = styled.div`
  cursor: pointer;
  flex: 1;
  width: 96px;
  height: 96px;
  img {
    object-fit: cover;
  }
`

const CardContent = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-around;
  padding-top: 12px;
`

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
`
const CardTitle = styled.h1`
  cursor: pointer;
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
const CardPrice = styled.div`
  font-weight: 700;
  line-height: 24px;
  font-size: 16px;
  color: '#2B2D36';
`

const CardRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const CardButton = styled.div`
  cursor: pointer;
`

const CardCount = styled.div`
  width: 21px;
  height: 24px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  line-height: 130%;
  margin-left: 4px;
`

export default ListCard
