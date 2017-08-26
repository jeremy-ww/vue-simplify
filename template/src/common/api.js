import { SERVER_WAS_DOWN, ERROR_MESSAGE, NOT_LOGGED_IN } from './http_error_message'
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

const handleUserNotLoggedIn = () => {
  const url = encodeURIComponent(window.location.href)
  window.location.href = `${process.env.SSO}/auth/entry?from=${url}`
}

api.interceptors.response.use(response => response.data, err => {
  const { message, response: { status = message } = {} } = err
  error(ERROR_MESSAGE[status] || SERVER_WAS_DOWN)
  if (status === NOT_LOGGED_IN) setTimeout(handleUserNotLoggedIn, 1500)
  return Promise.reject(err)
})

export default api
