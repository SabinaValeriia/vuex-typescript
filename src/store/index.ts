import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import post from './modules/post'
import user from './modules/user'

Vue.use(Vuex)

let store =  new  Vuex.Store ({
 
  modules: {
    post, 
    user
  }
});

export default store;