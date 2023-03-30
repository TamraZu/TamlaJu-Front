/** @jsxImportSource @emotion/react */

import React, { useState, useEffect, useContext, useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled'
import { ReactComponent as MapIcon } from 'atoms/icons/MapIcon.svg';
import { useSpring, animated } from 'react-spring';
import { BottomSheetControlType } from 'types/layoutControlType';
import { MapContext } from 'pages/Main';
import BrewerlyDetailCardView from './BrewerlyDetailCardView';
import { alcoholType, brewerlyType } from 'types/drinkType';

const container = css({
    maxWidth: 375,
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
float:left
`

const closeBtn = css`
float:right
`

const BottomSheetHeader = styled.h3`
display: flex;
`


export default function BottomSheetContainer({ isOpen, onClose }: BottomSheetControlType) {
    const [open, setOpen] = useState<boolean>(isOpen);
    const [isAnimating, setIsAnimating] = useState(false);
    const [data, setData] = useState<brewerlyType>()
    const { y } = useSpring({
        y: isOpen ? 0 : 120,
        config: { tension: 200, friction: 30 },
        onStart: () => setIsAnimating(true),
        onRest: () => setIsAnimating(false),
    });

    const handleClose = () => {
        if (!isAnimating) {
            // onClose();
            setOpen(false);
        }
    };


    const BottomSheetGenerate = () => {
        if(!data?.alcohols){
            const alcohol : alcoholType[] = data?.alcohols;
            console.log(alcohol)
            return null;
        }

        return (
            <div style={{ margin: '0 0 0 16px' }}>
                <MapIcon css={mapIcon} title='map' fill='#000' width={20} height={20}> </MapIcon>
                <MapIcon css={closeBtn} onClick={() => { setOpen(false) }} title='map' fill='#000' width={20} height={20}> </MapIcon>

                <div>
                    <h3>{data?.name}</h3>
                    <p>{data?.address}</p>
                </div>

                <BrewerlyDetailCardView alcohols={data.alcohols}/>

            </div>
        )
    }

    const contextData = useContext(MapContext);
    useEffect(() => {
        if(contextData?.data){
            setData(contextData.data)
        }
        console.log(contextData);
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