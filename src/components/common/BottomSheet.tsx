/** @jsxImportSource @emotion/react */

import React, { useState, useEffect, useContext, useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled'
import { ReactComponent as BreweryIcon } from 'atoms/icons/BreweryIcon.svg';
import { useSpring, animated } from 'react-spring';
import { BottomSheetControlType } from 'types/layoutControlType';
import { MapContext } from 'pages/Main';
import BrewerlyDetailCardView from './BrewerlyDetailCardView';
import { alcoholType, brewerlyType } from 'types/drinkType';
import close from 'atoms/icons/CloseIcon.svg'

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
    paddingTop: 24,
    backgroundColor: 'white',
    zIndex: 2
})

const mapIcon = css`
margin: 4px;    
`

const closeBtn = css`
position: absolute;
margin:4px;
right:16px;
`

const flexHeadline = css`
    display:flex;
`

const flexHeadWrapper = css`
    display:flex;
    position: relative;
    justify-content: space-between;
    align-content: center;
`
const address = css`
    margin: 0 28px 14px 28px;
    word-break: break-all;
    font-size:14px;
`

const CenterBold = styled.h1`
display: flex;
justify-content: center;
margin-top: 75px;
height: 100%;
`


export default function BottomSheetContainer({ isOpen, onClose }: BottomSheetControlType) {
    const [open, setOpen] = useState<boolean>(isOpen);
    const [isAnimating, setIsAnimating] = useState(false);
    const [data, setData] = useState<brewerlyType | undefined>()
    const { y } = useSpring({
        y: isOpen ? 0 : 120,
        config: { tension: 200, friction: 30 },
        onStart: () => setIsAnimating(true),
        onRest: () => setIsAnimating(false),
    });

    const handleClose = () => {
        if (!isAnimating) {
            setOpen(false);
        }
    };


    const BottomSheetGenerate = () => {
        return (
            <div style={{ margin: '0 0 0 16px' }}>
                <img src={close} css={closeBtn} onClick={() => { contextData?.toggleBottomSheet(false) }} alt="close" width={20} height={20}/>

                <div css={flexHeadWrapper}>
                    <div css={flexHeadline}>
                        <BreweryIcon css={mapIcon} title='map' fill='#000' width={20} height={20}> </BreweryIcon>
                        <h3>{data?.name}</h3>

                    </div>

                </div>

                <div css={address}>
                    <p>{data?.address}</p>
                </div>
                {data?.alcohols.length ?
                    <BrewerlyDetailCardView alcohols={data.alcohols} /> :
                    <CenterBold>상품 정보가 없습니다.</CenterBold>
                }


            </div>
        )
    }

    const contextData = useContext(MapContext);
    useEffect(() => {
        if (contextData?.data) {
            setData(contextData?.data)
        }
    }, [contextData])
    return (
        <>
            {isOpen && <div className="bottom-sheet-backdrop" onClick={handleClose} />}
            <animated.div
                className="bottom-sheet"
                css={container}
                style={{
                    transform: y.interpolate((y: number) => `translateY(${y}%)`),
                }}
            >
                {BottomSheetGenerate()}
            </animated.div>
        </>
    )
} 