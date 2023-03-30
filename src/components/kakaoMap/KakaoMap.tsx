import {Map} from 'react-kakao-maps-sdk';
import {css} from '@emotion/react';
import {latLngType, MarkerDataType} from '~types/kakaoMapType';
import React, {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import axios from '../../services';
import CustomMarker from "./marker/CustomMarker";

const container = css({
    width: '100%',
    height: '360px',
})

function KakaoMap({La, Ma}: latLngType) {
    const [markers, setMarkers] = useState<Array<MarkerDataType>>([]);
    useQuery(
        ['kakaomap', 'request', 'markers'],
        () => {
            return axios.get<MarkerDataType[]>('/marker/list');
        },
        {
            onSuccess: (data) => {
                setMarkers(data.data);
            },
        }
    );

    return (
        <Map css={container} center={{lat: La, lng: Ma}}>
            {markers.map((t) => {
                return (
                    <CustomMarker key={t.key} lat={t.lat} lng={t.lng} visited={t.visited}>
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
