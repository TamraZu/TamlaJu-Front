/** @jsxImportSource @emotion/react */

import { Map } from 'react-kakao-maps-sdk';
import { css, jsx } from '@emotion/react';
import { latLngType, MarkerDataType, mapOptionType } from 'types/kakaoMapType';
import { useState, useEffect } from 'react';
import {useQuery} from '@tanstack/react-query'
import axios from 'services';
import CustomMarker from "./marker/CustomMarker";
const container = css({
    width: '100%',
    height: '360px',
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
            return axios.get<MarkerDataType[]>('api/v1/factories?memberId=1');
        },
        {
            onSuccess: (data) => {
                setMarkers(data.data);
                console.log(data)
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

                {/* <CustomMarker latitude={center.lat} longitude={center.lng} onClick={() => {
                    // console.log()
                }}>
                    
                </CustomMarker> */}
            {/* {markers.map((t) => {
                return (
                    <CustomMarker key={t.key} lat={t.lat} lng={t.lng} visited={t.visited}>
                        <div>
                            inner component
                            <div>what</div>
                        </div>
                    </CustomMarker>
                );
            })} */}
        </Map>
    );
}

export default KakaoMap;
