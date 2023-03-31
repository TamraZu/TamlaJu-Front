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
  factory: string
}
export const getMyPageAlcohol = async (memberId: number) => {
  const response = await Axios.get(`/api/v1/members/page/${memberId}`)
  return response.data.data
}

export const getDetailAlcohol = async (alcoholId: number, memberId: number) => {
  const response = await Axios.get(`/api/v1/alcohols/${alcoholId}?memberId=${memberId}`)
  return response.data.data
}

export const getListAlcohol = async (memberId: number, category: string) => {
  const response = await Axios.get(`/api/v1/alcohols?memberId=${memberId}&category=${category}`)
  return response.data.data
}

export const getMyPage = async (memberId: number) => {
  const response = await Axios.get(`/api/v1/members/page/${memberId}`)
  return response.data.data
}

export const postEatingCount = async (memberId: number, alcoholId: number) => {
  const response = await Axios.post(`/api/v1/eats`, { memberId, alcoholId })
  return response.data.message === '등록 성공'
}
