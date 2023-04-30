import { useQuery } from '@tanstack/react-query'
import { getFactoryDetail } from 'apis'
import { BottomSheetDataType } from 'types/LayoutControlType'

export function useFactoryDetail(factoryId: number /*active: boolean*/) {
    const fallback: BottomSheetDataType = {
        selectedId: -1,
        alcohols: []
    }
    const { data = fallback, refetch } = useQuery(['factory', 'detail', factoryId], () => getFactoryDetail(factoryId),
        {
            // staleTime: 3000 * 300,
            // 추후 변경 예정
            suspense:false,
            enabled: false,
        })
    return {data, refetch};
}