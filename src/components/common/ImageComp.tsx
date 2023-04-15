import React, { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface BoxInterface {
    width?: number;
    height?: number;
}

export interface ImageInterface {
    src: string;
    alt: string;
    size: BoxInterface;
    onload?: () => void;
    isLoaded?: boolean;
}

type Temp = {
    isLoaded: boolean;
}

const spin = keyframes`
  to {
    transform:rotate(360deg)
  }
`
const LoadedView = styled.div((props: Temp) => ({
    display: `${props.isLoaded ? 'block' : 'none'}`
}))

const SkeletonBox = styled.div(({ width, height }: BoxInterface) => ({
    width: width,
    height: height,
    display: 'block',
    backgroundColor:'#dadada',
    margin:'inherit',
}))


const Image = React.memo(({ src, alt, onload }: ImageInterface) => {
    return <img src={src} alt={alt} className={'test'} onLoad={onload} />
})

const ImageComp = ({ src, alt, size }: ImageInterface) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false)
    }
    return (
        <>
            {isLoading && <SkeletonBox width={size.width} height={size.height}/>}
            <LoadedView isLoaded={!isLoading}>
                <Image src={src} alt={alt} size={size} onload={handleImageLoad} />
            </LoadedView>
        </>
    )
}


export default ImageComp;