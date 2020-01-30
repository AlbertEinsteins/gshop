import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../components/views/home/Home.vue')
const Category = () => import('../components/views/category/Category.vue')
const Shopping = () => import('../components/views/shopping/Shopping.vue')
const Profile = () => import('../components/views/profile/Profile.vue')
const Detail = () => import('../components/views/home/Detail.vue')

Vue.use(VueRouter)

//配置路由规则
const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: Home },
  { path: '/category', component: Category },
  { path: '/shop', component: Shopping },
  { path: '/profile', component: Profile },
  { path: '/detail/:id', component: Detail }
]



const router = new VueRouter({
  routes,
  mode: 'history'
})



export default router 