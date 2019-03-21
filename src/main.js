/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import ElementUI from 'element-ui'
import router from './router'
import './assets/styles/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
