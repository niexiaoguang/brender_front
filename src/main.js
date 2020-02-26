import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App.vue';
import { storeFactory } from './store/factory';

import wechatAuth from './plugins/wechat_auth';
// const qs = require('qs');



Vue.use(wechatAuth, {appid: 'wx71881af6d1cdaea8'});


Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
    store: storeFactory(),
    render: h => h(App)
}).$mount('app-root');