import Axios from 'axios'

const isProd = process.env.NODE_ENV === 'production'

// export const path = process.env.NEXT_PUBLIC_URL;

export const path = 'https://tamrazu.store/';
const axios = Axios.create({
    baseURL: path
});


export default axios
