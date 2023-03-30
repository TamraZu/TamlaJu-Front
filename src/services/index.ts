import Axios from 'axios'

const isProd = process.env.NODE_ENV === 'production'

// export const path = process.env.NEXT_PUBLIC_URL;
export const path = 'http://localhost:8081'
const axios = Axios.create({
  baseURL: isProd ? path : '',
})

export default axios
