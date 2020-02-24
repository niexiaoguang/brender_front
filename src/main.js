import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App.vue';
import { storeFactory } from './store/factory';

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  store: storeFactory(),
  render: h => h(App)
}).$mount('app-root');
