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
export default router