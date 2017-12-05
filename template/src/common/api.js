import { SERVER_WAS_DOWN, HTTP_ERROR_MESSAGE } from './http_error_message'
import debounce from 'lodash/debounce'
import { Message } from 'element-ui'
import axios from 'axios'

const api = axios.create({
  baseURL: '',
  withCredentials: true
})

const error = debounce(msg => {
  Message.error({
    message: msg,
    duration: 2000
  })
})

error('???')

api.interceptors.response.use(response => response.data, err => {
  const { message, response: { status = message } = {} } = err
  error(HTTP_ERROR_MESSAGE[status] || SERVER_WAS_DOWN)
  return Promise.reject(err)
})

export default api
