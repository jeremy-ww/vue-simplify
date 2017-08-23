import { SERVER_WAS_DOWN, ERROR_MESSAGE } from './http_error_message'
import { Message } from 'element-ui'
import axios from 'axios'

const api = axios.create({
  baseURL: '',
  withCredentials: true
})

const error = msg => {
  Message.error({
    message: msg,
    duration: 2000
  })
}

api.interceptors.response.use(response => response.data, err => {
  const { message, response: { status = message } = {} } = err
  error(ERROR_MESSAGE[status] || SERVER_WAS_DOWN)
  return Promise.reject(err)
})

export default api
