import { get } from 'utils/http'

// 登录
export function getPlatform(data) {
  return get('/getPlatform', data, 'answer_url')
}