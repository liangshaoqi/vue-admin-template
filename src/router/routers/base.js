/* eslint-disable */
import surveyRouter from './survey'
import baseIndexRouter from './baseIndex'
import functionRouter from './function'
const layoutChildren = [
    ...surveyRouter,
    ...baseIndexRouter,
    ...functionRouter
]
const baseRouter = [
    {
        path: '/',
        name: 'layout',
        component: () => import('views/base/layout'),
        children: layoutChildren
    },
    {
        path: '/login',
        name: '登录页',
        component: () => import('views/base/login')
    }
]
export default baseRouter