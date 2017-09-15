import Vue from 'vue'
import App from './App.vue'
//引入公共资源
import './assets/css/style.css'
import './assets/js/Adaptive.js'
//引入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './router.config';

const router=new VueRouter({
  routes:routes,
  mode:"history"//路径默认hash模式  此地方采用的是history模式
});

//引入状态管理
import store from './store/'

//引入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

//引入axios
import axios from 'axios';

//拦截器
axios.interceptors.request.use(function (config) {
  store.dispatch('showLoading');
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  store.dispatch('hideLoading');
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
axios.defaults.withCredentials=true;//携带凭证

Vue.prototype.$_http=axios;


//引入全局组件loading
import loading from './components/loading/index.js'
//使用自定义组件
Vue.use(loading);
//引入动画css
import 'animate.css';

import { Swipe, SwipeItem } from 'vue-swipe';
import "vue-swipe/dist/vue-swipe.css";
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);



//根实例
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
