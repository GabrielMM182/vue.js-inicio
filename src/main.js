import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import {routes} from './routes';

import './directives/Transform';
import VeeValidate from 'vee-validate';
import msgPtBr  from './pt_BR';

import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter);

// adicionando a propriedade mode com o valor history.

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

Vue.use(VeeValidate, {
  locale: "pt_BR",
  dictionary: { pt_BR: msgPtBr }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
