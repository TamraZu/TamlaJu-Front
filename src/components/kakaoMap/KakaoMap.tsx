/** @jsxImportSource @emotion/react */

import { Map } from 'react-kakao-maps-sdk';
import { css, jsx } from '@emotion/react';
import { latLngType, MarkerDataType, mapOptionType, apiConnectType } from 'types/kakaoMapType';
import { useState, useEffect, useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'services';
import CustomMarker from "./marker/CustomMarker";
import { MapContext } from 'pages/Main';
const container = css({
    width: '100%',
    height: '343px',
    margin: '12px 16px 0 16px',
    borderRadius: '16px',
})

function KakaoMap({ center, zoom }: mapOptionType) {
    const [zoomLevel, setZoom] = useState(zoom);
    const [position, setPosition] = useState<latLngType>(center)
    const [markers, setMarkers] = useState<MarkerDataType[]>([]);
    const data = useContext(MapContext);
    useEffect(() => {
        console.log(position)
    }, [position])

    useQuery(
        ['kakaomap', 'request', 'factories'],
        () => {
            return axios.get<apiConnectType<MarkerDataType[]>>('api/v1/factories?memberId=1');
        },
        {
            onSuccess: (response) => {
                setMarkers(response.data.data);
            },
        }
    );

    return (
        <Map css={container} center={position}
            level={zoomLevel}
            isPanto
            onClick={(_t, mouseEvent) => {
                data?.toggleBottomSheet(false);
            }
            }>

            {markers.map((t: MarkerDataType) => {
                return (
                    <CustomMarker
                        key={t.factoryId} factoryId={t.factoryId} address={t.address} latitude={t.latitude} longitude={t.longitude} hasAte={t.hasAte} setCenter={setPosition}>
                        <div>
                            inner component
                            <div>what</div>
                        </div>
                    </CustomMarker>
                );
            })}
        </Map>
    );
}

export default KakaoMap;
