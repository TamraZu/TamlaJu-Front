import { useState, useContext, useEffect } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { latLngType, MarkerDataType } from 'types/kakaoMapType';
import { useQuery } from '@tanstack/react-query';
import axios from 'services';
import { MapContext } from 'pages/Main';
import markerSelectedImage from 'atoms/png/BrewerySelectedIcon.png'
import markerAteImage from 'atoms/png/BreweryCheckedIcon.png'
import markerDefaultImage from 'atoms/png/BreweryIcon.png'

const ateMarker = {
  src: markerAteImage,
  size: {
    width: 24,
    height: 24,
  },
  options: {
    offset: {
      x: 12,
      y: 24,
    },
  },
}

const selectedMarker = {
  src: markerSelectedImage,
  size: {
    width: 24,
    height: 24,
  },
  options: {
    offset: {
      x: 12,
      y: 24,
    },
  },
}

const defaultMarker = {
  src: markerDefaultImage,
  size: {
    width: 24,
    height: 24,
  },
  options: {
    offset: {
      x: 12,
      y: 24,
    },
  },
}
export default function CustomMarker({ factoryId, latitude, longitude, hasAte, address, setCenter }: MarkerDataType) {
  const data = useContext(MapContext)

  const [isVisited, setIsVisited] = useState(hasAte);
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(data?.data?.selectedId === factoryId);
  const [image, setImage] = useState(defaultMarker)
  useEffect(() => {
    setImage(isSelected ? selectedMarker : isVisited ? ateMarker : defaultMarker)
  })


  return (
    <MapMarker
      position={{ lat: latitude, lng: longitude }}
      clickable={true}
      image={image}
      onClick={(e) => {
        data?.onDataChange({
          selectedId: factoryId!,
          name: 'test',
          address: address,
          LatLng: { lat: latitude, lng: longitude }
        })
        const pos = {
          lat: e.getPosition().getLat(),
          lng: e.getPosition().getLng()
        }


        setCenter({ lat: pos.lat, lng: pos.lng })
        data?.toggleBottomSheet(isOpen);

        setIsOpen(!isOpen);
        setIsSelected(data?.data?.selectedId === factoryId && isOpen);

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
