<template lang="pug">
#app
  <router-view></router-view>
</template>

<script lang="ts">
import Vue from 'vue';
import PostForm from './components/PostForm.vue'
import Hotel from './components/Hotel.vue'
import Header from './components/Header.vue'
import GoogleMap from './components/GoogleMap.vue'
import { mapGetters, mapActions, mapMutations} from 'vuex'

export default Vue.extend({
  name: 'App',
 
  
  components: {
    PostForm, Header, Hotel, GoogleMap
  },
  
});
</script>

<style lang="scss">
*, *:before, *:after{
    box-sizing: border-box;
}

html, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
}

footer, header, nav, section, main{
    display: block;
}

body{
    line-height: 1;
}

ol, ul{
    list-style: none;
}

blockquote, q{
    quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after{
    content: '';
    content: none;
}

table{
    border-collapse: collapse;
    border-spacing: 0;
}

input{
    -webkit-appearance: none;
    border-radius: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #081b2e;

}
</style>
