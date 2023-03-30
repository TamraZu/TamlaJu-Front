import { latLngType } from "types/kakaoMapType";
import React, { useState, createContext } from 'react'
import { BottomSheetDataType, BottomSheetRecoilPropType } from "types/layoutControlType";
import KakaoMap from "components/kakaoMap/KakaoMap";
import BottomSheetContainer from "components/common/BottomSheet";
import NavBar from "components/common/NavBar";
import styled from '@emotion/styled';

const defaultPosition: latLngType = { lat: 33.3764, lng: 126.5377 };

export const MapContext = createContext<BottomSheetRecoilPropType | null>(null);

const Header = styled.h1`
    font-size:28px;
    font-family: 'Pretendard';
`

function Main() {
    const data: BottomSheetRecoilPropType | null = null;
    const [btmSheetData, setBtmSheetData] = useState<BottomSheetDataType | null>(null);
    const [isOpen, setIsOpen] = useState(false);


    return <>
        <MapContext.Provider value={{
            data: btmSheetData, onDataChange: (newData) => {
                setBtmSheetData(newData);
            },
            toggleBottomSheet: (b: boolean) => setIsOpen(b)

        }}>
            <Header>제주 전통주로 특별한</Header>
            <Header>일상을 보내보세요</Header>

            <KakaoMap center={defaultPosition} zoom={11} />
            <BottomSheetContainer isOpen={isOpen} >

            </BottomSheetContainer>
            <NavBar/>
        </MapContext.Provider>
    </>;
}

export default Main;
