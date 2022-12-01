import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import post from './modules/post'
import hotel from './modules/hotel'
import user from './modules/user'

Vue.use(Vuex)

let store =  new  Vuex.Store ({
 
  modules: {
    post,
    hotel,
    user
    // books
  }
});

export default store;