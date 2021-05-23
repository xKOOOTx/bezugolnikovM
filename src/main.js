import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueSplide from '@splidejs/vue-splide'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueSplide)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
