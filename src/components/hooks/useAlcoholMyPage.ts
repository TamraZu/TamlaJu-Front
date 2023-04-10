import { useQuery } from '@tanstack/react-query'
import { getMyPageAlcohol } from 'apis'
import { MyPageData } from 'apis'

export function useAlcoholMyPage(): MyPageData {
  const fallback = {}
  const { data = fallback } = useQuery(['mypage'], () => getMyPageAlcohol())
  return data
}
