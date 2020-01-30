import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import store from './store/store'


//引入animate
import animated from 'animate.css'
Vue.use(animated)


//mockjs
import './mock/home/home'

//引入elementui
import 'element-ui/lib/theme-chalk/index.css'
import './element/element'


Vue.config.productionTip = false

//挂载 axios
Vue.prototype.$http = axios

//引入全局css
import './assets/css/public.css'
//引入font-awesome
import 'font-awesome/css/font-awesome.css'

//挂载一个bus
Vue.prototype.$bus = new Vue()


//点击同一个路由报错
// const originPush = router.prototype.push
// router.prototype.push = (location) => {
//   return originPush.call(this, locaiton).catch(err => err)
// }

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')



