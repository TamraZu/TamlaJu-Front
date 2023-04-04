import React, { useState, useContext, useEffect } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { apiConnectType, MarkerDataType } from 'types/kakaoMapType';
import axios from 'services';
import { MapContext } from 'pages/Main';
import markerSelectedImage from 'atoms/png/BrewerySelectedIcon.png'
import markerAteImage from 'atoms/png/BreweryCheckedIcon.png'
import markerDefaultImage from 'atoms/png/BreweryIcon.png'
import { brewerlyType } from 'types/drinkType';
import { useRecoilState } from 'recoil';
import { bottomSheetOpened, selectedMarker } from 'components/atoms/atoms';

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

const selectedMarkerImage = {
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

export function CustomMarker({ factoryId, latitude, longitude, hasAte, address, setCenter, setZoom }: MarkerDataType) {
  const data = useContext(MapContext)
  const [response, setResponse] = useState<apiConnectType<brewerlyType>>();
  const [marker, setSelectedMarker] = useRecoilState(selectedMarker);
  const [isOpen, setIsOpen] = useRecoilState(bottomSheetOpened);
  const [image, setImage] = useState(factoryId === marker ? selectedMarkerImage : hasAte ? ateMarker : defaultMarker);

  useEffect(() => {
    if (response) {
      data?.onDataChange(response.data)
    }
  }, [response])

  useEffect(() => {
    setImage(factoryId === marker ? selectedMarkerImage : hasAte ? ateMarker : defaultMarker);
  }, [marker])

  return (
    <MapMarker
      position={{ lat: latitude, lng: longitude }}
      clickable={true}
      image={image}
      onClick={(e) => {
        axios.get<apiConnectType<brewerlyType>>(`api/v1/factories/${factoryId}`)
          .then(t => {
            setResponse(t.data);
            setSelectedMarker(t.data.data.factoryId);
            console.log(t.data.data.factoryId)
          }).catch(e => {
            alert('네트워크 통신 실패')
          })
        setCenter({ lat: e.getPosition().getLat(), lng: e.getPosition().getLng() })
        setIsOpen(true);
      }

      }
    >
    </MapMarker >
  );
}

export const MemoizedMarker = React.memo(CustomMarker)