/** @jsxImportSource @emotion/react */

import { Map } from 'react-kakao-maps-sdk';
import { css } from '@emotion/react';
import { latLngType, MarkerDataType, mapOptionType, apiConnectType } from 'types/kakaoMapType';
import { useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'services';
import {MemoizedMarker} from "./marker/CustomMarker";
import { MapContext } from 'pages/Main';
import { bottomSheetOpened } from 'components/atoms/atoms';
import { useRecoilState } from 'recoil';
const container = css({
    width: 'calc(100% - 32px)',
    aspectRatio: '1/1',
    margin: '16px 0 16px 16px',
    borderRadius: '16px',
})

function KakaoMap({ center, zoom }: mapOptionType) {
    const [zoomLevel, setZoom] = useState(zoom);
    const [position, setPosition] = useState<latLngType>(center)
    const [markers, setMarkers] = useState<MarkerDataType[]>([]);
    const [isOpen, setIsOpen] = useRecoilState<boolean>(bottomSheetOpened);

    useQuery(
        ['kakaomap', 'request', 'factories'],
        () => {
            return axios.get<apiConnectType<MarkerDataType[]>>('api/v1/factories?memberId=1');
        },
        {
            onSuccess: (response) => {
                setMarkers(response.data.data);
            },
            onError: () => {
                console.error('Failed to getting marker info')
            }
        }
    );

    return (
        <Map css={container} center={position}
            level={zoomLevel}
            isPanto
            onClick={(_t, mouseEvent) => {
                setIsOpen(false);
            }
            }>

            {markers.map((t: MarkerDataType) => {
                return (
                    <MemoizedMarker
                        key={t.factoryId} factoryId={t.factoryId} address={t.address} latitude={t.latitude} longitude={t.longitude} hasAte={t.hasAte} setCenter={setPosition} setZoom={setZoom} children={undefined}/>
                );
            })}
        </Map>
    );
}

export default KakaoMap;
