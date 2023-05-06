import React, { useState } from "react";
import styled from "@emotion/styled";
// import Spinner from "./Spinner";
import { BoxStyleInterface, isLoadedType, ImageInterface } from "types/ImageCompType";

const LoadedView = styled.div((props: isLoadedType) => ({
    display: `${props.isLoaded ? 'block' : 'none'}`
}))

const SkeletonBox = styled.div(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#ffffff',
    borderRadius: 'inherit',
    cursor: 'progress',

}))

const Wrapper = styled.div(({ width, height, borderRadius, margin, padding }: BoxStyleInterface) => ({
    width: width,
    height: height,
    borderRadius: borderRadius,
    margin: margin,
    padding: padding,
    flexShrink: 0,
}))

// const Image = React.memo(({ src, alt, onload }: ImageInterface) => {
//     return <img src={src} alt={alt} onLoad={onload} />
// })

const Image = ({ src, alt, onload }: ImageInterface) => {
    return <img src={src} alt={alt}/>
}

const ImageComp = React.memo(({ src, alt, size }: ImageInterface) => {
    return (
        <Wrapper width={size.width} height={size.height} borderRadius={size.borderRadius} margin={size.margin}>
                <SkeletonBox>
                    <Image src={src} alt={alt} size={size}/>
                </SkeletonBox>
        </Wrapper>
    )
})


export default ImageComp;