import axios from 'axios'

const api = axios.create({
  baseURL:
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=e8f90e53-bf7d-4d8c-873f-c0ef15da0aac&limit=100&convert=INR',
  // headers: {
  // mode: "no-cors",
  // CMC_PRO_API_KEY: process.env.COINMARKETCAP_API_KEY,
  // },
})

export default api
