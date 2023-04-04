import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { alcoholType, brewerlyType } from 'types/drinkType';
import { ReactComponent as DrinkIcon } from 'atoms/icons/DrinkIcon.svg'

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

const TitleFont = styled.h1`
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.003em;
    width: 100px;
    display: inline-block; 
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap; 
`;

const CardTitleWrapper = styled.h1`
    display:flex;
    margin:0 10px;
    line-height: 24px;
    gap:2px;
    justify-content: center;
    align-items: center;

`

interface BrewerlydetailCardViewProps {
    alcohols: alcoholType[]
}

const BrewerlyDetailCardView = ({ alcohols }: BrewerlydetailCardViewProps) => {
    return (<CardWrapper>
        <>
            {alcohols.map((t: alcoholType) => {
                return (<Link to={`/details/${t.alcoholId}`}>
                    <Card key={t.alcoholId}>

                        <div style={{ position: 'relative' }}>
                            <DrinkImg src={t.imageUrl} />
                        </div>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <CardTitleWrapper>
                                <DrinkIcon width="20" fill={'#09121F'} />
                                <TitleFont>{t.name}</TitleFont>
                            </CardTitleWrapper>
                        </div>
                    </Card>
                </Link>)
            })}
        </>

    </CardWrapper>)
}

export default BrewerlyDetailCardView;