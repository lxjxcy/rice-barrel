// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import wx from 'weixin-js-sdk';
import axios from "./axiosconfig/index.js"

axios.defaults.withCredentials = true;
Vue.prototype.axios = axios;
import api from './api/';
Vue.prototype.$api = api;
import { DatetimePlugin, LocalePlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, AppPlugin } from 'vux'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LocalePlugin)
Vue.use(DatetimePlugin)

router.beforeEach((to, from, next) => {
 /* 路由发生变化修改页面title */
 if (to.meta.title) {
 document.title = to.meta.title
 }
 next()
})


Vue.config.productionTip = false

if (window.sessionStorage.getItem('deviceCode')) {
  store.commit('saveDeviceCode', window.sessionStorage.getItem('deviceCode'))
}
if (window.sessionStorage.getItem('code')) {
  store.commit('saveCode', window.sessionStorage.getItem('code'))
}
if (window.sessionStorage.getItem('openId')) {
  store.commit('saveOpenId', window.sessionStorage.getItem('openId'))
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
