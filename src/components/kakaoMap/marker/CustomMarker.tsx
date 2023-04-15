import React, { useState, useEffect, useCallback } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { MarkerDataType, MarkerImageType } from 'types/kakaoMapType';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { bottomSheetData, bottomSheetOpened, selectedMarker } from 'components/atoms/atoms';
import { BottomSheetDataType } from 'types/layoutControlType';
import { useFactoryDetail } from 'components/hooks/useFactoryDetail';
import { ATE_MARKER_IMG, DEFAULT_MARKER_IMG, SELECTED_MARKER_IMG } from './MarkerSprite';

export function CustomMarker({ factoryId, latitude, longitude, hasAte, address, setCenter, setZoom }: MarkerDataType) {
  // 마커의 이미지 상태 결정


  const [marker, setSelectedMarker] = useRecoilState(selectedMarker);
  const [image, setImage] = useState<MarkerImageType>();

  const getImage = useCallback((): MarkerImageType => {
    if (factoryId === marker) {
      return SELECTED_MARKER_IMG
    } else if (hasAte) {
      return ATE_MARKER_IMG
    } else {
      return DEFAULT_MARKER_IMG
    }
  }, [factoryId, hasAte, marker])

  const setIsOpen = useSetRecoilState(bottomSheetOpened);
  const setData = useSetRecoilState<BottomSheetDataType>(bottomSheetData)

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen])

  useEffect(() => {
    // 마커 이미지 변경
    setImage(getImage());
  }, [marker, getImage])

  const data = useFactoryDetail(factoryId)
  const markerClick = (data: BottomSheetDataType) => {
    setSelectedMarker(factoryId);
    setData(data);
    setIsOpen(true);
  }

  return (
    <MapMarker
      position={{ lat: latitude, lng: longitude }}
      clickable={true}
      image={image}
      onClick={(event) => {
        // 클릭 시 양조장 상세정보 API 호출
        markerClick(data);
        setCenter({ lat: event.getPosition().getLat(), lng: event.getPosition().getLng() })
      }}>
    </MapMarker >
  );
}

export const MemoizedMarker = React.memo(CustomMarker)