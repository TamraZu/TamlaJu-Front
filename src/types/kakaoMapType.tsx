import { ReactNode } from 'react';

export type latLngType = {
  La: number;
  Ma: number;
};

export type pointType = {
  x: number;
  y: number;
};

export type locationDataType = {
  latLng: latLngType;
  point: pointType;
};

export type MarkerDataType = {
  key: number;
  children: ReactNode;
  lat: number;
  lng: number;
  visited?: boolean;
};
