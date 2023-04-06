import React, { useEffect, useState } from 'react';
import axios from 'services';
import { drinkType } from 'types/drinkType';
import { apiConnectType } from 'types/kakaoMapType';
import styled from '@emotion/styled';
import RankingItem from './RankingItem';
import { AxiosResponse } from 'axios';

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
    useEffect(() => {
        axios.get<apiConnectType<drinkType[]>>('/api/v1/alcohols/rank')
            .then(t => {
                setData(t.data.data);
            }).catch(err => {
                alert(err);
            })
        return () => {
        }
    }, [])


    return <RankingWrapper>
        {data?.map((t,i) => {
            return <RankingItem prop={t} index={i+1} key={t.alcoholId}/>
        })}
    </RankingWrapper>
}


export default RankingContainer;