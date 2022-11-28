import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import post from './modules/post'

Vue.use(Vuex)

let store =  new  Vuex.Store ({
 
  modules: {
    post
  }
});

export default store;