import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Home from '@/views/ViewHome'
import About from '@/views/ViewAbout'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',

  // 페이지로 넘길 컴포넌트를 매핑
  routes: [
    {path: '/', component: Home},
    {path:'/about', component: About}
  ]
})

export default router