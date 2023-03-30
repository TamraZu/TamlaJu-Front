import axios from 'axios'

const BASE_URL = 'https://tamrazu.store'

export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
})

export interface MyPageData {
  memberId: number
  nickname: string
  count: number
  alcohols: {
    alcoholId: number
    name: string
    imageUrl: string
  }
}

export interface DetailData {
  address: string
  alcoholId: number
  ateCount: number
  category: string
  description: string
  hasAte: boolean
  imageUrl: string
  level: number
  name: string
  price: number
  region: string
  tasteImage: string | null
  volume: number
}
export const getMyPageAlcohol = async (memberId: number) => {
  const response = await Axios.get(`/api/v1/members/page/${memberId}`)
  return response.data.data
}

export const getDetailAlcohol = async (alcoholId: number, memberId: number) => {
  const response = await Axios.get(`/api/v1/alcohols/${alcoholId}?memberId=${memberId}`)
  return response.data.data
}
