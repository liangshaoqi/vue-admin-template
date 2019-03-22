/* eslint-disable */
import __import from '../__import'
const prefix_path = 'survey'
const __import__ = (page) => __import(prefix_path, page)

const surveyRouter = [
  {
    path: `/${prefix_path}`,
    name: `/${prefix_path}`,
    redirect: `/${prefix_path}/page`,
    component: __import__('index'),
    children: [
      {
        path: 'page',
        name: '数据概览',
        component: __import__('main')
      }
    ]
  }
]
export default surveyRouter