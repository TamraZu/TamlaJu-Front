import React, { useState, useContext, useEffect } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { apiConnectType, MarkerDataType } from 'types/kakaoMapType';
import axios from 'services';
import { MapContext } from 'pages/Main';
import markerSelectedImage from 'atoms/png/BrewerySelectedIcon.png'
import markerAteImage from 'atoms/png/BreweryCheckedIcon.png'
import markerDefaultImage from 'atoms/png/BreweryIcon.png'
import { brewerlyType } from 'types/drinkType';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { bottomSheetOpened, selectedMarker } from 'components/atoms/atoms';

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
  const data = useContext(MapContext)
  const [response, setResponse] = useState<apiConnectType<brewerlyType>>();
  const [marker, setSelectedMarker] = useRecoilState(selectedMarker);
  const setIsOpen = useSetRecoilState(bottomSheetOpened);
  const [image, setImage] = useState(factoryId === marker ? SELECTED_MARKER_IMG : hasAte ? ATE_MARKER_IMG : DEFAULT_MARKER_IMG);

  useEffect(() => {
    // 데이터 변경
    if (response) {
      data?.onDataChange(response.data)
    }
    // 마커 이미지 변경
    setImage(factoryId === marker ? SELECTED_MARKER_IMG : hasAte ? ATE_MARKER_IMG : DEFAULT_MARKER_IMG);
  }, [response, marker])

  return (
    <MapMarker
      position={{ lat: latitude, lng: longitude }}
      clickable={true}
      image={image}
      onClick={(event) => {
        // 클릭 시 양조장 상세정보 API 호출
        axios.get<apiConnectType<brewerlyType>>(`api/v1/factories/${factoryId}`)
          .then(t => {
            setResponse(t.data);
            setSelectedMarker(t.data.data.factoryId);
          }).catch(e => {
            alert('네트워크 통신 실패')
          })
        setCenter({ lat: event.getPosition().getLat(), lng: event.getPosition().getLng() })
        setIsOpen(true);
      }

      }
    >
    </MapMarker >
  );
}

export const MemoizedMarker = React.memo(CustomMarker)