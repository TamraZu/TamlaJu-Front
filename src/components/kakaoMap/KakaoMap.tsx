/** @jsxImportSource @emotion/react */

import { Map } from 'react-kakao-maps-sdk';
import { css } from '@emotion/react';
import { latLngType, MarkerDataType, mapOptionType, apiConnectType } from 'types/kakaoMapType';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'services';
import { MemoizedMarker } from "./marker/CustomMarker";
import { bottomSheetOpened, memberId } from 'components/atoms/atoms';
import { useSetRecoilState, useRecoilValue } from 'recoil';
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
    const mId = useRecoilValue(memberId)
    const setIsOpen = useSetRecoilState<boolean>(bottomSheetOpened);

    useQuery(
        ['kakaomap', 'request', 'factories'],
        () => {
            return axios.get<apiConnectType<MarkerDataType[]>>(`api/v1/factories?memberId=${mId}`);
        },
        {
            onSuccess: (response) => {
                console.log(response);
                setMarkers(response.data.data);
            },
            onError: (err) => {
                console.error('Failed to getting marker info', err)
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
                        key={t.factoryId} factoryId={t.factoryId} address={t.address} latitude={t.latitude} longitude={t.longitude} hasAte={t.hasAte} setCenter={setPosition} setZoom={setZoom} children={undefined} />
                );
            })}
        </Map>
    );
}

export default KakaoMap;
