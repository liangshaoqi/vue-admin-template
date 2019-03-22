/* eslint-disable */
import __import from '../__import'
const prefix_path = 'baseIndex'
const __import__ = (page) => __import(prefix_path, page)

const baseIndexRouter = [
  {
    path: `/${prefix_path}`,
    name: `/${prefix_path}`,
    redirect: `/${prefix_path}/page`,
    component: __import__('index'),
    children: [
      {
        path: 'trend',
        name: '数据概览',
        component: __import__('trend')
      },
      {
        path: 'activeUser',
        name: '活跃用户',
        component: __import__('activeUser')
      }
    ]
  }
]
export default baseIndexRouter