/* eslint-disable */
import __import from '../__import'
const prefix_path = 'function'
const __import__ = (page) => __import(prefix_path, page)

const functionRouter = [
  {
    path: `/${prefix_path}`,
    name: `/${prefix_path}`,
    redirect: `/${prefix_path}/page`,
    component: __import__('index'),
    children: [
      {
        path: 'page',
        name: '功能分析',
        component: __import__('main')
      }
    ]
  }
]
export default functionRouter