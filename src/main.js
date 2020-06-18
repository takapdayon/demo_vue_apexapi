import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueToasted from 'vue-toasted';
import axios from 'axios';

Vue.config.productionTip = false
axios.defaults.headers.get["TRN-Api-Key"] = process.env.VUE_APP_KEY;
axios.defaults.withCredentials = true;
axios.defaults.headers.get["Accept"] = "application/json";

Vue.use(VueToasted, {
  iconPack: 'fontawesome'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
