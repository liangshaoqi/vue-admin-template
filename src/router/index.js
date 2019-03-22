/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../vuex/store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes
})
// 路由登录拦截
router.beforeEach((to, from, next) => {
    // 路由切换, 取消上一个页面的请求
    // store && store.dispatch('runCancel')
    if(!sessionStorage.getItem('token')) {
        if(to.path === '/login') {
            next()
            return
        }
        next({
            path: '/login',
            query: {
                redirect: to.fullPath 
            }
        })
    } else {
        next()
    }
})
export default router