import axios from 'axios'
import { Logger } from './logger'

/**
 * Log Responser 
 * 
 * @param {*} res 
 * @returns
 */
export const logResponser = (res) => {
  if (!res) return null
  const { config } = res
  const loadTime = performance.now()
  const url = config.url.replace(import.meta.env.VITE_APP_ENDPOINT, '')

  Logger(`${config.method.toUpperCase()} ${url}`, {
    responseTime: loadTime,
    status: res.status,
    statusText: res.statusText,
    error: res?.data?.meta?.error || '',
    message: res?.data?.meta?.message || ''
  })
}

/**
 * Axios create default config
 */
const services = axios.create({
  baseURL: import.meta.env.VITE_APP_ENDPOINT || 'http://localhost',
  headers: {}
})

/**
 * Axios interceptors response
 */
services.interceptors.response.use(function (res) {
  // * Turn on Logger when not in production
  if (import.meta.env.NODE_ENV !== 'production')
    logResponser(res)
  return res
}, function (error) {
  const err = error?.response
  // * Turn on logger when not in production 
  if (import.meta.env.NODE_ENV !== 'production')
    logResponser(err)
  return Promise.reject(err)
})

/**
 * Function Get
 * 
 * @param {string} url 
 * @param {*} params
 */
export const get = (url, params) => {
  return services.get(`${url}`, { params })
}

/**
 * Function Post 
 * 
 * @param {string} url 
 * @param {*} body
 */
export const post = (url, body) => {
  return services.post(`${url}`, body)
}

/**
 * Function Put
 * 
 * @param {string} url 
 * @param {*} body
 */
export const put = (url, body) => {
  return services.put(`${url}`, body)
}

/**
 * Function Delete
 * 
 * @param {string} url 
 * @param {*} params 
 */
export const del = (url, params) => {
  return services.delete(`${url}`, { params })
}

/**
 * Custom function getBlob
 * 
 * @param {string} url 
 * @param {*} params 
 */
export const getBlob = (url, params) => {
  return services.get(`${url}`, { params, responseType: 'blob' })
}