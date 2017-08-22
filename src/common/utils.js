import api from './api'

export const HTTP_CACHE = {}

export const cache = (path, params = {}) => {
  if (HTTP_CACHE[path]) return HTTP_CACHE[path]
  const options = Object.assign({ url: path, method: 'get' }, params)
  HTTP_CACHE[path] = api(options).catch(noop)
  return HTTP_CACHE[path]
}
