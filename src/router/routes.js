const routes =[
  {
    // 首页路由
    path: '/',
    name: 'Home',
    component: () => import  ('../views/home/Home.vue')
  },
  {
    // 详情页路由
    path: '/deta/:id',
    name: 'deta',
    component: () => import  ('../views/details/Details.vue')
  },
]

export default routes