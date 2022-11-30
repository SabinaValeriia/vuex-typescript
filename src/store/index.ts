import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import post from './modules/post'
import hotel from './modules/hotel'

Vue.use(Vuex)

let store =  new  Vuex.Store ({
 
  modules: {
    post,
    hotel
    // books
  }
});

export default store;