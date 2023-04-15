import { useState } from 'react';
import styled from '@emotion/styled';
import RankingItem from './RankingItem';
import { getRanking } from 'apis';
import { useQuery } from '@tanstack/react-query';
import { useRankingList } from 'components/hooks/useRankingList';

const RankingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 16px;
    align-content: center;
    justify-content: center;
`

// 캐싱 필요
const RankingContainer = () => {
    // const [drinkData, setData] = useState<drinkType[]>([]);
    // 초기 데이터 Load
    // const {data, refetch, ...rest} = useQuery(
    //     ['get', 'ranking', 'list'],
    //     () => {
    //         return getRanking();
    //     },
    //     {
    //         // cacheTime:1000*1000,
    //         onSettled: (data, err) => {
    //             if(data) setData(data);
    //             if(err) console.error(err);
    //         },
    //         onSuccess: (res) => {
    //             setData(res);
    //         },
    //         onError: (err) => {
    //             console.error("getRankingError", err)
    //         }
    //     }
    // )

    const rankData = useRankingList();


    return <RankingWrapper>
        {rankData?.map((t, i) => {
            return <RankingItem prop={t} index={i + 1} key={t.alcoholId} />
        })}
    </RankingWrapper>
}


export default RankingContainer;