export default [
  {
    title: '数据概览',
    path: '/survey',
    icon: 'el-icon-location'
  },
  {
    title: '功能统计',
    path: '/function',
    icon: 'el-icon-menu'
  },
  {
    title: '基本指标',
    path: '/baseIndex',
    icon: 'el-icon-tickets',
    children: [
      {
        title: '趋势分析',
        path: '/baseIndex/trend',
        icon: ''
      },
      {
        title: '活跃用户',
        path: '/baseIndex/activeUser',
        icon: ''
      }
    ]
  }
]