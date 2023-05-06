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

const Image = React.memo(({ src, alt, onload }: ImageInterface) => {
    return <img src={src} alt={alt} onLoad={onload} />
})

const ImageComp = ({ src, alt, size }: ImageInterface) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    }
    return (
        <Wrapper width={size.width} height={size.height} borderRadius={size.borderRadius} margin={size.margin}>
            {
                isLoading &&
                <SkeletonBox>
                    {/* <Spinner /> */}
                </SkeletonBox>
            }
            <LoadedView isLoaded={!isLoading}>
                <Image src={src} alt={alt} size={size} onload={handleImageLoad} />
            </LoadedView>
        </Wrapper>
    )
}


export default ImageComp;