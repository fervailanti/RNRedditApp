import { REDDIT_API_BASE_URL } from '@utils/constants'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: REDDIT_API_BASE_URL,
})
