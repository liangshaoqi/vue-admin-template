/* eslint-disable */
import axios from 'axios'
import config from 'config/url_config'
import qs from 'qs'
import router from '@/router'
import store from '@vuex/store'
import { Message } from 'element-ui';
import { session_get } from 'utils'
// 进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 创建axios实例
const service = axios.create({
  timeout: 60000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    // 进度条开始
    nprogress.start()
    // 设置头部
    config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    // config.cancelToken = new axios.CancelToken((cencel) => {
    //   if(cencel) {
    //     store.commit('addCancelArr', cancel)
    //   }
    // })
    if(session_get('token')) {
      config.headers.adoptToken = session_get('token')
    }
    // 判断请求方式
    if(config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  // 成功回调
  (response) => {
    // 进度条结束
    nprogress.done()
    if(response.status === 200) {
      let data = response.data
      // 以下判断根据每个项目不同状态码做出不同处理
      if(data.status === 0) {
        return data
      }
      if(data.status === 1) {
        Message.error('请求参数错误')
        return Promise.reject(data)
      }
      if(data.status === 2) {
        sessionStorage.clear()
        Message.error('登录过期,请重新登录')
        router.push('/login')
        return data
      }
      if(data.status === 3) {
        Message.error('无权限请求')
        return Promise.reject(data)
      }
    }
  },
  (error) => {
    nprogress.done()
    // if(error.message === 'cancel') {
    //   return Promise.reject('cancel')
    // }
    Message.error('请求异常,请检查网络。')
    return Promise.reject(error)
  }
)

/**
 * post方法
 * @param {String} url 地址
 * @param {Object} data 参数
 * @param {String} baseURL 前缀地址
 */
export function post(url, data, baseURL = 'main_url') {
  return service({
    baseURL: config[baseURL], // 请求url前缀
    url,
    data,
    method: 'post'
  })
}
// get
export function get(url, data, baseURL = 'main_url') {
  return service({
    baseURL: config[baseURL], // 请求url前缀
    url,
    params: data,
    method: 'get'
  })
}
