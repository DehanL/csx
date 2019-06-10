// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

// import axios from 'axios';
// import HTTP from './http-common';
// This is a coment

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VeeValidate from 'vee-validate';

// import dotenv from 'dotenv';

// dotenv.config();
Vue.config.productionTip = false;
// Vue.prototype.$http = axios;

Vue.use(BootstrapVue);
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
