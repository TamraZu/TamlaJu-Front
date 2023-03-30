/** @jsxImportSource @emotion/react */

import React, { useState, useEffect, useContext, useRef } from 'react';
import { css } from '@emotion/react';
import { useSpring, animated } from 'react-spring';
import { BottomSheetControlType } from 'types/layoutControlType';
import { MapContext } from 'pages/Main';

const container = css({
    maxWidth: 375,
    width:'100%',
    height:328,
    position: 'absolute',
    display: 'flex',
    bottom: 0,
    margin: '0 auto',
    borderRadius: '16px 16px 0 0',
    boxShadow: '0 -12px 20px rgba(0,0,0,0.16)',
    paddingTop: 24,
    backgroundColor: 'white',
    zIndex:2
})

export default function BottomSheetContainer({ isOpen, onClose }: BottomSheetControlType) {
    const [open, setOpen] = useState<boolean>(isOpen);
    const [isAnimating, setIsAnimating] = useState(false);

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
    const contextData = useContext(MapContext)
    useEffect(() => {
        console.log(isOpen)
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
                    transform: y.interpolate(y => `translateY(${y}%)`),
                }}
            >
                
            </animated.div>
        </>
    )
} 