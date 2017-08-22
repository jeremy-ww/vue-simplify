export const NOT_LOGGED_IN = 401
export const REQUEST_NOT_FOUND = 404
export const REQUEST_ERROR = 500
export const NETWORK_ERROR = 'Network Error'
export const SERVER_WAS_DOWN = '抱歉，服务端异常'
export const MIXED_CONTENT = '抱歉，无法支持 https 访问，即将跳转 http 模式'

export const ERROR_MESSAGE = {
  [NETWORK_ERROR]: '网络异常',
  [NOT_LOGGED_IN]: '尚未登录，前往登录界面',
  [REQUEST_NOT_FOUND]: '请求对象不存在',
  [REQUEST_ERROR]: '请求出错'
}
