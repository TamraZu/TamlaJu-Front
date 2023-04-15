import { useQuery } from '@tanstack/react-query'
import { getFactoryDetail } from 'apis'
import { useRecoilValue } from 'recoil'
import { memberId } from 'components/atoms/atoms'
import { MarkerDataType } from 'types/kakaoMapType'
import { BottomSheetDataType } from 'types/layoutControlType'

export function useFactoryDetail(factoryId: number) {
    const fallback: BottomSheetDataType = {
        selectedId: -1,
        alcohols: []
    }
    const { data = fallback } = useQuery(['factory', 'detail', factoryId], () => getFactoryDetail(factoryId),
        {
            staleTime: 3000 * 300,
            
        })
    return data;
}
