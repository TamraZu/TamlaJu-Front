import { useQuery } from '@tanstack/react-query'
import { getDetailAlcohol } from 'apis'
import { DetailPageAlcoholType } from 'types/DrinkType'

export function useAlcoholDetail(alcoholId: number): DetailPageAlcoholType {
  const fallback = {}
  const { data = fallback } = useQuery(['detail', alcoholId], () => getDetailAlcohol(alcoholId))
  return data
}
