import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuex from 'vuex'
import '@/permission'
import api from './api/install'

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';



//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
//Vue.use(ElementUI);
Vue.use(api)
Vue.use(MintUI);
Vue.use(Vuex)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
