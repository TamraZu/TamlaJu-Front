import { useQuery } from '@tanstack/react-query'
import { getFactoryList } from 'apis'
import { useRecoilValue } from 'recoil'
import { memberId } from 'components/atoms/atoms'
import { MarkerDataType } from 'types/KakaoMapType'

export function useFactoryList(): MarkerDataType[] {
  const fallback : MarkerDataType[] = []
  const mId = useRecoilValue(memberId)
  const { data = fallback } = useQuery(['factory', 'list'], () => getFactoryList(mId))
  return data
}
