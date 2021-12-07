import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart, faShoppingBag, faInfoCircle, faCartArrowDown, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingCart, faShoppingBag, faInfoCircle, faCartArrowDown, faTimes)

// Sweetalert2
Vue.use(VueSweetalert2)

// 註冊元件
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
