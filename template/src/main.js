import './bootstrap/register-global-components'
import './assets/app.css'

import Vue from 'vue'
import App from './App'
import router from './router'

require('promise.prototype.finally').shim()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
