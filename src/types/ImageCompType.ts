export interface BoxStyleInterface {
    width: number | string;
    height: number | string;
    borderRadius?:number | string;
    margin?:number | string;
    padding?: number | string;
}

export interface ImageInterface {
    src: string;
    alt: string;
    size: BoxStyleInterface;
    onload?: () => void;
    isLoaded?: boolean;
}

export type isLoadedType = {
    isLoaded: boolean;
}