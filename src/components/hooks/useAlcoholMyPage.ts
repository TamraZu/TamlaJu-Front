import { useQuery } from '@tanstack/react-query'
import { getMyPageAlcohol } from 'apis'
import { MyPageAlcoholType } from 'types/DrinkType'

export function useAlcoholMyPage(): MyPageAlcoholType {
  const fallback = {}
  const { data = fallback } = useQuery(['mypage'], () => getMyPageAlcohol(), { suspense: true })
  return data
}
