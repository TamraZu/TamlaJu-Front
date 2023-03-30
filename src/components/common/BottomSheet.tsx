/** @jsxImportSource @emotion/react */

import React, { useState, useEffect, useContext, useRef } from 'react';
import { css } from '@emotion/react';
import { ReactComponent as BrewerlyIcon } from 'atoms/icons/BrewerlyIcon.svg';
import { useSpring, animated } from 'react-spring';
import { BottomSheetControlType } from 'types/layoutControlType';
import { MapContext } from 'pages/Main';
import BrewerlyDetailCardView from './BrewerlyDetailCardView';
import { brewerlyType } from 'types/drinkType';

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
        if (!isAnimating && onClose) {
            onClose();
        }
    };
    const contextData = useContext(MapContext);

    useEffect(() => {
        if(isOpen){
            // setData(contextData?.data!)
        }
        // if (isOpen) {
        // isOpen()
        // }
    }, [isOpen])

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

                <div css={css`
                    display: flex;
                `}>
                    {/* <BrewerlyIcon width="20" height="20" fill={'#09121F'}>

                    </BrewerlyIcon> */}
                </div>
                <BrewerlyDetailCardView factoryId={1} name='dummy' address='dummy' alcohols={[{
                    alcoholId: 1,
                    name: 'test',
                    imageUrl: 'string' 
                }]}></BrewerlyDetailCardView>


            </animated.div>
        </>
    )
} 