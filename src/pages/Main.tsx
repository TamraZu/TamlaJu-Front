import { latLngType } from "types/kakaoMapType";
import { useState, createContext, useEffect } from 'react'
import { BottomSheetRecoilPropType } from "types/layoutControlType";
import KakaoMap from "components/kakaoMap/KakaoMap";
import BottomSheetContainer from "components/common/BottomSheet";
import NavBar from "components/common/NavBar";
import styled from '@emotion/styled';
import { BrewerlyType } from "types/drinkType";
import RankingContainer from "components/common/ranking/RankingContainer";
import HasAuth from "components/auth/Auth";

const defaultPosition: latLngType = { lat: 33.3764, lng: 126.5377 };

export const MapContext = createContext<BottomSheetRecoilPropType | null>(null);

const Container = styled.div``

const Wrapper = styled.div`
    overflow-y:hidden;
    height:calc(100vh - 50px);
    
`

const Scroll = styled.div`
    ::-webkit-scrollbar{
        display:none;
    }
    overflow-y:scroll;
    height:100%;
`


const Header = styled.h1`
    font-size:28px;
    font-family: 'Pretendard';
    font-weight:700;
    margin:12px 0 0 16px;
    word-break: keep-all;
    word-wrap: break-word;
`


function Main() {
    // const data: BottomSheetRecoilPropType | null = null;
    const [btmSheetData, setBtmSheetData] = useState<BrewerlyType>();
    HasAuth();


    return <Container>
        <MapContext.Provider value={{
            data: btmSheetData,
            // selectedMarker,
            onDataChange: (newData) => {
                setBtmSheetData(newData);
            },

        }}>
            <Wrapper>
                <Scroll>
                <Header>제주 전통주로 특별한<br />
                    일상을 보내보세요</Header>

                <KakaoMap center={defaultPosition} zoom={11} />
                <Header>
                    전통주 순위
                </Header>
                <RankingContainer />
                </Scroll>
            </Wrapper>
            <BottomSheetContainer />
            <NavBar />
        </MapContext.Provider>
    </Container>;
}

export default Main;
