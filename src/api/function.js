import { get } from 'utils/http'

// 登录
export function getchart(data) {
  return get('/functional/chart', data)
}