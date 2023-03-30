import { useState, useContext } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { MarkerDataType } from 'types/kakaoMapType';
import { useQuery } from '@tanstack/react-query';
import axios from 'services';
import BottomSheetContainer from 'components/common/BottomSheet';
import { MapContext } from 'pages/Main';

const visitedMarker = {
  src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
  size: {
    width: 64,
    height: 69,
  },
  options: {
    offset: {
      x: 27,
      y: 69,
    },
  },
};

export default function CustomMarker({ factoryId, latitude, longitude, visited, address }: MarkerDataType) {
  const [isVisited, setIsVisited] = useState(visited);
  const [isOpen, setIsOpen] = useState(false);
  const data = useContext(MapContext)
  console.log(data);
  return (
    <MapMarker
      position={{ lat: latitude, lng: longitude }}
      clickable={true}
      image={isVisited ? visitedMarker : undefined}
      onClick={() => {
        data?.onDataChange({
          selectedId: 0,
          name: 'test',
          address: address,
          LatLng: { lat: latitude, lng: longitude }
        })
      data?.toggleBottomSheet(isOpen);
  setIsOpen(!isOpen);
}
        // 커스텀 마커에서 클릭했을때 지도의 중심으로 이동
        // 
        // key 를 기반으로 DB에 디테일 정보 get 요청하기
        // 요청한 정보 Bottomsheet에 넣어 열기 

      }
    >
    </MapMarker >
  );
}
