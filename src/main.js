import Vue from 'vue'
import App from './App.vue'
import '@/assets/base.scss'
import { showMessage } from './utils/show-message'
Vue.prototype.showMessage = showMessage
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
