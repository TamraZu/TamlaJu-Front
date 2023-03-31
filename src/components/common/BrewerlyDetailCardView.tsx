import React from 'react';
import styled from '@emotion/styled';
import { alcoholType, brewerlyType } from 'types/drinkType';
import drinkIcon from 'atoms/icons/DrinkIcon.svg';
const CardWrapper = styled.div`
    border-radius: 16px;
    width:100%;
    margin:14px 16px 58px 16px;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    gap:8px;
    ::-webkit-scrollbar{
        display:none;
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 138px;
    height: 196px;
    border-radius: 16px;
    border: #ffe9d4 1px solid ;
    background-color: #fff7f0;
`

const DrinkImg = styled.img`
margin:10px;
width: 118px;
height: 126px;
border-radius: 12px;
`
const StampImg = styled.img`
position: absolute;
left:0;
right:0;
`

const DrinkIcon = styled.img`
width:20px;
height: 20px;
`
interface BrewerlydetailCardViewProps {
    alcohols: alcoholType[]
}

const BrewerlyDetailCardView = ({ alcohols }: BrewerlydetailCardViewProps) => {
    return (<CardWrapper>
        <>
            {alcohols.map((t: alcoholType) => {
                return (<Card key={t.alcoholId}>
                    
                    <div style={{ position: 'relative' }}>
                        <DrinkImg src={t.imageUrl} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <DrinkIcon src={drinkIcon}/>
                        <h5>{t.name}</h5>
                    </div>
                    <div>

                    </div>
                </Card>)
            })}
        </>

    </CardWrapper>)
}

export default BrewerlyDetailCardView;