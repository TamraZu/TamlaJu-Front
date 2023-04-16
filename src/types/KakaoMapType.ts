import { ReactNode } from 'react'

export interface LatLngType {
  lat: number
  lng: number
}

export type PointType = {
  x: number
  y: number
}

export interface MapOptionType {
  center: LatLngType
  zoom: number
}

export type LocationDataType = {
  latLng: LatLngType
  point: PointType
}

export type MarkerDataType = {
  factoryId: number
  children: ReactNode
  latitude: number
  longitude: number
  address: string
  hasAte: boolean
  onClick?: () => void
  setCenter: (pos: LatLngType) => void
  setZoom: (zoom: number) => void
}

export type MarkerImageType = {
  src: string
  size: {
    width: number
    height: number
  }
  options: {
    offset: {
      x: number
      y: number
    }
  }
}

export interface ApiConnectType<T> {
  success: boolean
  message: string
  data: T
}
