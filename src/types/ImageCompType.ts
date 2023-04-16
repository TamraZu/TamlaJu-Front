export interface BoxStyleInterface {
    width: number;
    height: number;
    borderRadius:number;
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