import axios from 'services'
import { DrinkType } from 'types/DrinkType'
import { ApiConnectType, MarkerDataType } from 'types/KakaoMapType'
import { BottomSheetDataType } from 'types/LayoutControlType'

export interface MyPageData {
  memberId: number
  nickname: string
  count: number
  alcohols: alcoholData[]
}

interface alcoholData {
  alcoholId: number
  name: string
  imageUrl: string
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

// 4.6 소셜 로그인 백엔드 개편 이후로부터
// 반드시 header에 authorization:{accessToken}이 있어야 합니다.
// service에 있는 axios는 로그인 시 interceptor를 통해
// header를 반영하니, 가급적 service 내 axios 사용 바랍니다.

export const getMyPageAlcohol = async () => {
  const response = await axios.get(`/api/v1/members/page`)
  return response.data.data
}

export const getDetailAlcohol = async (alcoholId: number) => {
  const response = await axios.get(`/api/v1/alcohols/${alcoholId}`)
  return response.data.data
}

export const getListAlcohol = async (category: string) => {
  const response = await axios.get(`/api/v1/alcohols?category=${category}`)
  return response.data.data
}

export const putEatingCount = async (alcoholId: number) => {
  const response = await axios.put(`/api/v1/histories/${alcoholId}`)
  return response.data.message === '등록 성공'
}

// 04.06. 추가

/**
 * 주류 순위의 TOP 3를 반환한다.
 *
 * @author Ramon K Shin
 * @version 1.0
 * @returns 음료 순위 TOP 3 반환
 */
export const getRanking = async () => {
  const response = await axios.get<ApiConnectType<DrinkType[]>>('/api/v1/alcohols/rank')
  return response.data.data
}

/**
 * 전체 양조장의 목록을 배열로 반환한다.
 * @param mId 멤버 아이디
 * @returns 공장 상세정보 배열
 */
export const getFactoryList = async (mId: string) => {
  const response = await axios.get<ApiConnectType<MarkerDataType[]>>(
    `api/v1/factories?memberId=${mId}`,
  )
  return response.data.data
}

/**
 * factoryId에 해당하는 양조장의 자세한 정보를 반환한다.
 * @param factoryId 양조장 아이디
 * @returns 바텀 시트에 쓰일 정보들 (이름, 주소, 술 목록)
 */
export const getFactoryDetail = async (factoryId: number) => {
  const response = await axios.get<ApiConnectType<BottomSheetDataType>>(
    `api/v1/factories/${factoryId}`,
  )
  return response.data.data
}
