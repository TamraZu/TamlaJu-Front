import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query'
import { putEatingCount } from 'apis'
import { useToast } from 'components/hooks/useToast'
import { getNewUID } from 'util/getUID'
import { ReactComponent as ProfileIcon } from 'atoms/icons/ProfileIcon.svg'

export function usePutHasAte(
  category: string,
): UseMutateFunction<boolean, unknown, number, unknown> {
  const queryClient = useQueryClient()
  const { fireToast } = useToast()

  const { mutate } = useMutation((alcoholId: number) => putEatingCount(alcoholId), {
    onError: error => {
      console.log(error)
    },
    onSuccess: (data, alcoholId, context) => {
      if (data) {
        fireToast({
          id: getNewUID(),
          children: '나의 기록에 추가됐어요',
          duration: 1000,
          ImageComponent: ProfileIcon,
        })
      } else {
        fireToast({
          id: getNewUID(),
          children: '나의 기록에서 삭제됐어요',
          duration: 1000,
          ImageComponent: ProfileIcon,
        })
      }
    },
    onSettled: (data, error, alcoholId) => {
      queryClient.invalidateQueries([category])
      queryClient.invalidateQueries(['detail', alcoholId])
    },
  })
  return mutate
}
