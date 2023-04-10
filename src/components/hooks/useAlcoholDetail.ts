import { useQuery } from '@tanstack/react-query'
import { getDetailAlcohol } from 'apis'
import { DetailData } from 'apis'

export function useAlcoholDetail(alcoholId: number): DetailData {
  const fallback = {}
  const { data = fallback } = useQuery(['detail', alcoholId], () => getDetailAlcohol(alcoholId))
  return data
}
