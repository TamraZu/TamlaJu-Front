import { useQuery } from '@tanstack/react-query'
import { getRanking } from 'apis'
import { useRecoilValue } from 'recoil'
import { memberId } from 'components/atoms/atoms'
import { RankingType } from 'types/drinkType'

export function useRankingList(): RankingType[] {
  const fallback : RankingType[] = []
  const { data = fallback } = useQuery(['ranking', 'list'], () => getRanking())
  return data
}
