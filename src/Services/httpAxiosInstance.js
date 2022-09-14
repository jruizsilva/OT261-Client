import axios from 'axios'

const token = JSON.parse(localStorage.getItem('token'))

const url = process.env.REACT_APP_URL

export const httpAxiosInstance = axios.create({
  baseURL: url,
  timeout: 1000
})

httpAxiosInstance.interceptors.request.use(
  request => {
    request.headers['token'] = token || {}
    return request
  },
  err => err
)
