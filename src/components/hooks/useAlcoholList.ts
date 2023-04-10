import { useQuery } from '@tanstack/react-query'
import { getListAlcohol } from 'apis'
import { ListAlcoholData } from 'pages/List'

export function useAlcoholList(category: string): ListAlcoholData[] {
  const fallback: ListAlcoholData[] = []
  const { data = fallback } = useQuery([category], () => getListAlcohol(category))
  return data
}
