import { useQuery } from '@tanstack/react-query'
import { getRanking } from 'apis'
import { RankingType } from 'types/DrinkType'

export function useRankingList(): RankingType[] {
  const fallback: RankingType[] = []
  const { data = fallback } = useQuery(['ranking', 'list'], () => getRanking(), {
    staleTime: 1000 * 300,
    suspense: true,
  })
  return data
}
