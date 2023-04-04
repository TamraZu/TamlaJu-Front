/** @jsxImportSource @emotion/react */

import { useState, useEffect, useContext } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled'
import { ReactComponent as BreweryIcon } from 'atoms/icons/BreweryIcon.svg';
import { useSpring, animated } from 'react-spring';
import { MapContext } from 'pages/Main';
import BrewerlyDetailCardView from './BrewerlyDetailCardView';
import { brewerlyType } from 'types/drinkType';
import close from 'atoms/icons/CloseIcon.svg'
import { useRecoilState } from 'recoil';
import { bottomSheetOpened } from 'components/atoms/atoms';

const container = css({
    maxWidth: 375,
    overflow: 'hidden',
    width: '100%',
    height: 328,
    position: 'absolute',
    display: 'flex',
    bottom: 0,
    margin: '0 auto',
    borderRadius: '16px 16px 0 0',
    boxShadow: '0 -12px 20px rgba(0,0,0,0.16)',
    padding: '24px 16px 0 16px',
    backgroundColor: 'white',
    zIndex: 2
})

const mapIcon = css`
margin: 4px;    
`

const closeBtn = css`
position: absolute;
cursor:pointer;
margin:4px;
right:16px;
z-index: 1;
`

const flexHeadline = css`
    display:flex;
    width:100%;
`

const flexHeadWrapper = css`
    width:100%;
    display:flex;
    position: relative;
    justify-content: space-between;
    align-content: center;
`
const address = css`
    margin: 0 28px 0 28px;
    word-break: break-all;
    font-size:14px;
    height: 48px;
`

const CenterBold = styled.h1`
display: flex;
justify-content: center;
margin-top: 75px;
height: 100%;
`

const TitleFont = styled.h1`
    font-size: 20px;
    font-weight: 700;
    word-break: keep-all;
    word-wrap: break-word;
    width:calc(100% - 36px);
`;

const AddressFont = styled.h1`
    font-size: 16px;
    word-break: keep-all;
    word-wrap: break-word;
`;

const CardViewContainer = styled.div`
    width: calc(100vw - 32px);
    overflow-y: hidden;
    overflow-x: scroll;
`

export default function BottomSheetContainer() {

    const [isAnimating, setIsAnimating] = useState(false);
    const [data, setData] = useState<brewerlyType | undefined>()
    const [isOpen, setIsOpen] = useRecoilState<boolean>(bottomSheetOpened);
    const { y } = useSpring({
        y: isOpen ? 0 : 120,
        config: { tension: 200, friction: 30 },
        onStart: () => setIsAnimating(true),
        onRest: () => setIsAnimating(false),
    });

    const handleClose = () => {
        if (!isAnimating) {
            setIsOpen(false);
        }
    };

    const contextData = useContext(MapContext);
    useEffect(() => {
        if (contextData?.data) {
            setData(contextData?.data)
        }
    }, [contextData]);


    return (
        <>
            {isOpen && <div className="bottom-sheet-backdrop" onClick={handleClose} />}
            <animated.div
                className="bottom-sheet"
                css={container}
                style={{
                    transform: y.to((y: number) => `translateY(${y}%)`),
                }}
            >
                <div>
                    <div css={closeBtn} onClick={() => {
                        setIsOpen(false);
                    }}>
                        <img src={close} alt="close" width={20} height={20} />
                    </div>
                    <div css={flexHeadWrapper}>
                        <div css={flexHeadline}>
                            <BreweryIcon css={mapIcon} title='map' fill='#000' width={20} height={20}> </BreweryIcon>
                            <TitleFont >{data?.name}</TitleFont>

                        </div>

                    </div>

                    <div css={address}>
                        <AddressFont>{data?.address}</AddressFont>
                    </div>
                    <CardViewContainer>
                    {data?.alcohols.length ?
                        <BrewerlyDetailCardView alcohols={data.alcohols} /> :
                        <CenterBold>상품 정보가 없습니다.</CenterBold>
                    }
                    </CardViewContainer>
                </div>
            </animated.div>
        </>
    )
}