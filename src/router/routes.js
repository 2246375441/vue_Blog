const routes =[
  {
    // 首页路由
    path: '/',
    name: 'Home',
    component: () => import  ('../views/home/Home.vue')
  }
]

export default routes