import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './state/store'
import './components/base'
import './registerServiceWorker'
import AuthPlugin from './plugins/auth'

Vue.config.productionTip = false

Vue.use(AuthPlugin, { router })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')