import React, { useState, useEffect } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { MarkerDataType } from 'types/kakaoMapType';
import markerSelectedImage from 'atoms/png/BrewerySelectedIcon.png'
import markerAteImage from 'atoms/png/BreweryCheckedIcon.png'
import markerDefaultImage from 'atoms/png/BreweryIcon.png'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { bottomSheetData, bottomSheetOpened, selectedMarker } from 'components/atoms/atoms';
import { BottomSheetDataType } from 'types/layoutControlType';
import { getFactoryDetail } from 'apis';
import { useQuery } from '@tanstack/react-query';

const ATE_MARKER_IMG = {
  src: markerAteImage,
  size: {
    width: 36,
    height: 36,
  },
  options: {
    offset: {
      x: 18,
      y: 36,
    },
  },
}

const SELECTED_MARKER_IMG = {
  src: markerSelectedImage,
  size: {
    width: 36,
    height: 36,
  },
  options: {
    offset: {
      x: 18,
      y: 36,
    },
  },
}


const DEFAULT_MARKER_IMG = {
  src: markerDefaultImage,
  size: {
    width: 36,
    height: 36,
  },
  options: {
    offset: {
      x: 18,
      y: 36,
    },
  },
}

export function CustomMarker({ factoryId, latitude, longitude, hasAte, address, setCenter, setZoom }: MarkerDataType) {

  const getImage = () => {
    if (factoryId === marker) {
      return SELECTED_MARKER_IMG
    } else if (hasAte) {
      return ATE_MARKER_IMG
    } else {
      return DEFAULT_MARKER_IMG
    }
  }

  const [marker, setSelectedMarker] = useRecoilState(selectedMarker);
  const setIsOpen = useSetRecoilState(bottomSheetOpened);
  const [image, setImage] = useState(getImage());
  const [data, setData] = useRecoilState<BottomSheetDataType>(bottomSheetData)

  useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen])

  useEffect(() => {
    // 마커 이미지 변경
    setImage(getImage());
  }, [marker, getImage])

  const { refetch, isStale } = useQuery(
    ['get', 'factory', 'detail', factoryId],
    () => {
      return getFactoryDetail(factoryId);
    },
    {
      staleTime:0,
      enabled: false,
      onSuccess: (res) => {
        setData(res);
        setSelectedMarker(factoryId);
      },
      onError: (err) => {
        console.error('GetFactoryDetail', err);
      }
    }
  )

  return (
    <MapMarker
      position={{ lat: latitude, lng: longitude }}
      clickable={true}
      image={image}
      onClick={(event) => {
        // 클릭 시 양조장 상세정보 API 호출
        refetch();

        setCenter({ lat: event.getPosition().getLat(), lng: event.getPosition().getLng() })
        setIsOpen(true);
      }

      }
    >
    </MapMarker >
  );
}

export const MemoizedMarker = React.memo(CustomMarker)