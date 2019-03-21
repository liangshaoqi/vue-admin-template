/* eslint-disable */
const layoutChildren = []
const baseRouter = [
    {
        path: '/',
        name: 'layout',
        component: () => import('views/base/layout')
    },
    {
        path: '/login',
        name: '登录页',
        component: () => import('views/base/login')
    }
]
export default baseRouter