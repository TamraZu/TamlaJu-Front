/** @jsxImportSource @emotion/react */

import { Map } from 'react-kakao-maps-sdk';
import { css, jsx } from '@emotion/react';
import { latLngType, MarkerDataType, mapOptionType, apiConnectType } from 'types/kakaoMapType';
import { useState, useEffect } from 'react';
import {useQuery} from '@tanstack/react-query'
import axios from 'services';
import CustomMarker from "./marker/CustomMarker";
const container = css({
    width: '100%',
    height: '343px',
    margin:'12px 16px 0 16px',
    borderRadius:'16px',
})

function KakaoMap({center, zoom}: mapOptionType) {
    const [zoomLevel, setZoom] = useState(zoom);
    const [position, setPosition] = useState<latLngType>(center)
    const [markers, setMarkers] = useState<MarkerDataType[]>([]);

    useEffect(() => {
        console.log(position)
    }, [position])

    useQuery(
        ['kakaomap', 'request', 'factories'],
        () => {
            return axios.get<apiConnectType<MarkerDataType[]>>('api/v1/factories?memberId=1');
        },
        {
            onSuccess: (data) => {
                console.log(data)

                setMarkers(data.data);
            },
        }
    );

    return (
        <Map css={container} center={center}
            level={zoomLevel}
            onRightClick={(_t, mouseEvent) => setPosition({
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng()
            })

            }>

                <CustomMarker latitude={center.lat} longitude={center.lng} address='' onClick={() => {
                    // console.log()
                }}>
                    
                </CustomMarker>
            {markers.map((t:MarkerDataType) => {
                return (
                    <CustomMarker key={t.factoryId} address={t.address} latitude={t.latitude} longitude={t.longitude} hasAte={t.hasAte}>
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
