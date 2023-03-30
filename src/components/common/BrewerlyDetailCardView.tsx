import React from 'react';
import styled from '@emotion/styled';
import { alcoholType, brewerlyType } from 'types/drinkType';
import { ReactComponent as DrinkIcon } from 'atoms/icons/DrinkIcon.svg';

const CardWrapper = styled.div`
    border-radius: 16px;
    width:100%;
    margin:14px 16px 58px 16px;
    overflow-x: scroll;
    display: flex;
    gap:8;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 138px;
    height: 184px;
    border-radius: 16px;
    border: #ffe9d4 1px solid ;
    background-color: #fff7f0;
`
interface BrewerlydetailCardViewProps {
    alcohols:alcoholType[]
}

const BrewerlyDetailCardView = ({alcohols}:BrewerlydetailCardViewProps) => {
    return (<CardWrapper>
        <>
            {alcohols.map((t: alcoholType) => {
                return (<Card key={t.alcoholId}>
                    <img src={t.imageUrl} />
                    <div><DrinkIcon />
                        <h3>{t.name}</h3>
                    </div>
                </Card>)
            })}
        </>

    </CardWrapper>)
}

export default BrewerlyDetailCardView;