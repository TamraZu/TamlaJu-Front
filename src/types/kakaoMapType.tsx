import { ReactNode } from 'react';

export interface latLngType {
  lat: number;
  lng: number;
};

export type pointType = {
  x: number;
  y: number;
};

export interface mapOptionType {
  center: latLngType;
  zoom: number
}

export type locationDataType = {
  latLng: latLngType;
  point: pointType;
};

export type MarkerDataType = {
  factoryId?: number;
  children?: ReactNode;
  latitude: number;
  longitude: number;
  address:string;
  visited?: boolean;
  onClick?: () => void;
};
