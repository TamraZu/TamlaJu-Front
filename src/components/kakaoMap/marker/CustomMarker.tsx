import React, { useState, useEffect, useCallback } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { MarkerDataType, MarkerImageType } from 'types/KakaoMapType';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { bottomSheetData, bottomSheetOpened, selectedMarker } from 'components/atoms/atoms';
import { BottomSheetDataType } from 'types/LayoutControlType';
import { useFactoryDetail } from 'components/hooks/useFactoryDetail';
import { ATE_MARKER_IMG, DEFAULT_MARKER_IMG, SELECTED_MARKER_IMG } from './MarkerSprite';

export function CustomMarker({ factoryId, latitude, longitude, hasAte, address, setCenter, setZoom }: MarkerDataType) {

  const setIsOpen = useSetRecoilState(bottomSheetOpened);
  const setData = useSetRecoilState<BottomSheetDataType>(bottomSheetData)
  // const [active, setActive] = useState(false);
  const [marker, setSelectedMarker] = useRecoilState(selectedMarker);
  const [image, setImage] = useState<MarkerImageType>();

  const { data, refetch } = useFactoryDetail(factoryId)

  const getImage = useCallback((): MarkerImageType => {
    if (factoryId === marker) {
      return SELECTED_MARKER_IMG
    } else if (hasAte) {
      return ATE_MARKER_IMG
    } else {
      return DEFAULT_MARKER_IMG
    }
  }, [factoryId, hasAte, marker])

  useEffect(() => {
    if (factoryId === marker) {
      refetch().then((res) => {
        setData(res.data!)
      }).catch(e => {
        console.error(e);
      })
    }
  }, [refetch, setData])

  useEffect(() => {
    // 마커 이미지 변경
    setImage(getImage());
  }, [marker, getImage])

  return (
    <MapMarker
      position={{ lat: latitude, lng: longitude }}
      clickable={true}
      image={image}
      onClick={async (event) => {
        // 클릭 시 양조장 상세정보 API 호출
        const res = await refetch();
        await setIsOpen(true);
        await setSelectedMarker(factoryId);
        if(res.data){
          await setData(res.data);
        } else {
          console.error(res.error);
        }
        setCenter({ lat: event.getPosition().getLat(), lng: event.getPosition().getLng() })
      }}>
    </MapMarker >
  );
}

export const MemoizedMarker = React.memo(CustomMarker)