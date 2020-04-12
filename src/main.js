import Vue from 'vue'
import App from '@/App.vue'
import {store} from './store/store.js'
import BootstrapVue from "bootstrap-vue";
import VueNesCss from 'vuenes.css'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "nes.css/css/nes.min.css";

Vue.config.productionTip = false

Vue.use(VueNesCss)
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
