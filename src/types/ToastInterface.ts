import React, { ReactNode } from 'react'

export interface ToastInterface {
  id?: string
  children: ReactNode | string
  duration?: number
  ImageComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
