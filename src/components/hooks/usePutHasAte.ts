import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query'
import { putEatingCount } from 'apis'

export function usePutHasAte(
  category: string,
): UseMutateFunction<boolean, unknown, number, unknown> {
  const queryClient = useQueryClient()
  const { mutate } = useMutation((alcoholId: number) => putEatingCount(alcoholId), {
    onError: error => {
      console.log(error)
    },
    onSettled: (data, error, alcoholId) => {
      queryClient.invalidateQueries([category])
      queryClient.invalidateQueries(['detail', alcoholId])
    },
  })
  return mutate
}
