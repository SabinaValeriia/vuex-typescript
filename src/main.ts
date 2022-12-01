import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import * as VueGoogleMaps from 'vue2-google-maps'
import router from './router/router'
import '@/assets/scss/font.scss'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {

  load: {
  
  key: 'AIzaSyDx0tqgl8M_Cp8D1GxFckPX_xx6lhg9S0',
  
  libraries: 'places',
  
  }
  
  });
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
