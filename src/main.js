import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSplide from '@splidejs/vue-splide'

Vue.use(VueSplide)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
