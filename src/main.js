import Vue from 'vue'
import App from '@/App.vue'
import {store} from './store/store.js'
import VueNesCss from 'vuenes.css'

import "nes.css/css/nes.min.css";

Vue.config.productionTip = false

Vue.use(VueNesCss)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
