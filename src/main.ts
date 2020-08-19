import Vue from 'vue'
import App from './components/pages/App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
