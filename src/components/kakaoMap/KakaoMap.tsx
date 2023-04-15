/** @jsxImportSource @emotion/react */

import { Map } from 'react-kakao-maps-sdk';
import { css } from '@emotion/react';
import { latLngType, MarkerDataType, mapOptionType } from 'types/kakaoMapType';
import { useState, useEffect } from 'react';
import { MemoizedMarker } from "./marker/CustomMarker";
import { bottomSheetOpened } from 'components/atoms/atoms';
import { useSetRecoilState } from 'recoil';
import { useFactoryList } from 'components/hooks/useFactoryList';
const container = css({
    width: 'calc(100% - 32px)',
    aspectRatio: '1/1',
    margin: '16px 0 16px 16px',
    borderRadius: '16px',
})

function KakaoMap({ center, zoom }: mapOptionType) {
    const [zoomLevel, setZoom] = useState(zoom);
    const [position, setPosition] = useState<latLngType>(center)

    const markers = useFactoryList();

    const setIsOpen = useSetRecoilState<boolean>(bottomSheetOpened);


    return (
        <Map css={container} 
            center={position}
            level={zoomLevel}
            isPanto
            onClick={() => {setIsOpen(false);}}>

            {markers.map((t: MarkerDataType) => {
                return (
                    <MemoizedMarker
                        key={t.factoryId}
                        factoryId={t.factoryId}
                        address={t.address}
                        latitude={t.latitude}
                        longitude={t.longitude}
                        hasAte={t.hasAte}
                        setCenter={setPosition}
                        setZoom={setZoom}
                        children={undefined} />
                );
            })}
        </Map>
    );
}

export default KakaoMap;
