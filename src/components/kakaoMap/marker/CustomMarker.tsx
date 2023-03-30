import { useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { MarkerDataType } from 'types/kakaoMapType';
import { useQuery } from '@tanstack/react-query';
import axios from 'services';

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

export default function CustomMarker({ lat, lng, visited }: MarkerDataType) {
  const [isVisited, setIsVisited] = useState(visited);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MapMarker
      position={{ lat, lng }}
      clickable={true}
      image={isVisited ? visitedMarker : undefined}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen && <div> this is test !</div>}
    </MapMarker>
  );
}
