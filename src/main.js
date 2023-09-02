//$Id$

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuexstore';


window.onload = () => {
  new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app'); //No I18N
}