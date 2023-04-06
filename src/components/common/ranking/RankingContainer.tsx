import { useState } from 'react';
import { drinkType } from 'types/drinkType';
import styled from '@emotion/styled';
import RankingItem from './RankingItem';
import { getRanking } from 'apis';
import { useQuery } from '@tanstack/react-query';

const RankingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 16px;
    align-content: center;
    justify-content: center;
`

const RankingContainer = () => {
    const [data, setData] = useState<drinkType[]>([]);
    // 초기 데이터 Load
    useQuery(
        ['get', 'ranking', 'list'],
        () => {
            return getRanking();
        },
        {
            onSuccess: (res) => {
                setData(res);
            },
            onError: (err) => {
                console.error("getRankingError", err)
            }
        }
    )


    return <RankingWrapper>
        {data?.map((t, i) => {
            return <RankingItem prop={t} index={i + 1} key={t.alcoholId} />
        })}
    </RankingWrapper>
}


export default RankingContainer;