import { useQuery } from '@tanstack/react-query'
import { getListAlcohol } from 'apis'
import { ListAlcoholDataType } from 'types/DrinkType'

export function useAlcoholList(category: string): ListAlcoholDataType[] {
  const fallback: ListAlcoholDataType[] = []
  const { data = fallback } = useQuery([category], () => getListAlcohol(category), {
    suspense: true,
  })
  return data
}
