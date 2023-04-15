import styled from '@emotion/styled';
import RankingItem from './RankingItem';
import { useRankingList } from 'components/hooks/useRankingList';

const RankingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 16px;
    align-content: center;
    justify-content: center;
`

const RankingContainer = () => {
    const rankData = useRankingList();

    return <RankingWrapper>
        {rankData?.map((t, i) => {
            return <RankingItem prop={t} index={i + 1} key={t.alcoholId} />
        })}
    </RankingWrapper>
}


export default RankingContainer;