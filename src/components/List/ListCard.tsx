import styled from '@emotion/styled'
import { ReactComponent as IsDrinkedIcon } from 'atoms/icons/IsDrinkedIcon.svg'
import { useNavigate } from 'react-router-dom'
import { ListAlcoholData } from 'pages/List'

export interface ListCardProps {
  drink: ListAlcoholData
}

function ListCard({ drink }: ListCardProps) {
  const navigate = useNavigate()

  return (
    <CardContainer onClick={() => navigate(`/details/${drink.alcoholId}`)}>
      <CardImage>
        <img src={drink.imageUrl} alt="술 이미지" />
      </CardImage>
      <CardContent>
        <CardLeft>
          <CardTitle>{drink.name}</CardTitle>
          <CardInfo>{`${drink.volume}ml | ${drink.level}도`}</CardInfo>
          <CardPrice>{drink.price}원</CardPrice>
        </CardLeft>
        <CardRight>
          <CardButton>
            <IsDrinkedIcon width={32} height={32} fill={drink.hasAte ? '#FD6E21' : '#858899'} />
          </CardButton>
          <CardCount>{drink.ateCount}</CardCount>
        </CardRight>
      </CardContent>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 130px;
  display: flex;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 8px;
  background-color: #fff7f1;
  border: #ffe9d5 solid 1px;
`

const CardImage = styled.div`
  width: 96px;
  height: 96px;
  img {
    object-fit: cover;
    width: 96px;
    height: 96px;
  }
`

const CardContent = styled.div`
  display: flex;
  padding-top: 12px;
  margin-left: 16px;
`

const CardLeft = styled.div`
  position: absolute;
  left: 125px;
`
const CardTitle = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  line-height: 120%;
  width: 200px;
  height: 28px;
  margin-bottom: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
`

const CardInfo = styled.div`
  font-weight: 300;
  line-height: 22px;
  font-size: 14px;
  height: 22px;
  margin-top: -10px;
`
const CardPrice = styled.div`
  height: 24px;
  margin-top: 8px;
  font-weight: 700;
  line-height: 24px;
  font-size: 16px;
  color: '#2B2D36';
`

const CardRight = styled.div`
  position: absolute;
  right: 19px;
  bottom: 16px;
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
