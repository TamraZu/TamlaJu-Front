import React, { useState } from "react";
import styled from "@emotion/styled";
import Spinner from "./Spinner";
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
    background: '#eeeeee',
    borderRadius: 'inherit',
    cursor: 'progress',

}))

const Wrapper = styled.div(({ width, height, borderRadius }: BoxStyleInterface) => ({
    margin: 10,
    width: width - 10,
    height: height,
    borderRadius: borderRadius,
}))

const Image = React.memo(({ src, alt, onload }: ImageInterface) => {
    return <img src={src} alt={alt} onLoad={onload} />
})

const ImageComp = ({ src, alt, size }: ImageInterface) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    }
    return (
        <Wrapper width={size.width} height={size.height} borderRadius={12}>
            {
            isLoading && 
            <SkeletonBox>
                <Spinner />
            </SkeletonBox>
            }
            <LoadedView isLoaded={!isLoading}>
                <Image src={src} alt={alt} size={size} onload={handleImageLoad} />
            </LoadedView>
        </Wrapper>
    )
}


export default ImageComp;