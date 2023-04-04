import { useState, useContext, useEffect } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { apiConnectType, latLngType, MarkerDataType } from 'types/kakaoMapType';
import { useQuery } from '@tanstack/react-query';
import axios from 'services';
import { MapContext } from 'pages/Main';
import markerSelectedImage from 'atoms/png/BrewerySelectedIcon.png'
import markerAteImage from 'atoms/png/BreweryCheckedIcon.png'
import markerDefaultImage from 'atoms/png/BreweryIcon.png'
import { brewerlyType } from 'types/drinkType';
import { AxiosResponse } from 'axios';

const ateMarker = {
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

// const selectedMarker = {
//   src: markerSelectedImage,
//   size: {
//     width: 24,
//     height: 24,
//   },
//   options: {
//     offset: {
//       x: 12,
//       y: 24,
//     },
//   },
// }


const defaultMarker = {
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
export default function CustomMarker({ factoryId, latitude, longitude, hasAte, address, setCenter }: MarkerDataType) {
  const data = useContext(MapContext)
  const [response, setResponse] = useState<apiConnectType<brewerlyType>>();
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  // const [isVisited, setIsVisited] = useState(hasAte);
  // const [isSelected, setIsSelected] = useState(data?.data?.factoryId === factoryId);
  const [image, setImage] = useState(hasAte ? ateMarker : defaultMarker);
  // useEffect(() => {
  // setImage(isSelected ? selectedMarker : isVisited ? ateMarker : defaultMarker)
  // })


  // useQuery(
  //   ['kakaomap', 'request', 'factories', 'details'],
  //   () => {
  //     return axios.get<apiConnectType<brewerlyType>>(`api/v1/factories/${factoryId}`);
  //   },
  //   {
  //     enabled: enabled,
  //     onSuccess: (response) => {
  //       setResponse(response.data.data);
  //     },
  //   }
  // );

  
  useEffect(() => {
    if (response) {
      data?.onDataChange(response.data)
    }
  }, [response])

  return (
    <MapMarker
      position={{ lat: latitude, lng: longitude }}
      clickable={true}
      image={image}
      onClick={(e) => {
        axios.get<apiConnectType<brewerlyType>>(`api/v1/factories/${factoryId}`)
          .then(t => {
            setResponse(t.data);
          }).catch(e => {
          alert('네트워크 통신 실패')
        })

        const pos = {
          lat: e.getPosition().getLat(),
          lng: e.getPosition().getLng()
        }

        setCenter({ lat: pos.lat, lng: pos.lng })
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
