import { post } from 'utils/http'
// 登录
export function login(data) {
  return post('/authc/login', data)
}