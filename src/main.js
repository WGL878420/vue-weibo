// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import App from './App'
import router from './router'
import store from './store'

import './assets/stylus/index.styl'

Vue.config.productionTip = true

import Ripple from 'vue-ripple-directive'
Ripple.color = 'rgba(238, 238, 238, 0.6)';
Vue.directive('ripple', Ripple)

// import AlloyFinger from 'alloyfinger'
// import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue.js'
// Vue.use(AlloyFingerVue, { AlloyFinger: AlloyFinger });

const VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

// Vue.directive('title', {
//   inserted: function (el, binding) {
//     document.title = el.innerText
//     el.remove()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})

