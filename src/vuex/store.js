import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_PRODUCT: (state, product) => {
            let isProductExists = false;
            if(state.thing.length){
                state.thing.map(function(item) {
                    if(item.article === product.article) {
                        isProductExists = true;
                        item.quantity++
                    }
                })
                if(!isProductExists) {
                    state.thing.push(product)
                }
            }else {
                state.thing.push(product)
            }
            
        },
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products',{
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data)
                    return products;
                })
                .catch((error)=> {
                    console.log(error)
                    return error;
                })
        },

    },
    getters: {
        PRODUCTS(state) {
            return state.products;
          },
    },


});


export default store;
