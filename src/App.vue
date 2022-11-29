<template lang="pug">
  #app
    <PostForm></PostForm>
    .post(v-for="post in validPosts"  :key="post.id")
      h2 {{post.title}}
      p {{post.body}}
</template>

<script lang="ts">
import Vue from 'vue';
import PostForm from './components/PostForm.vue'
import { mapGetters, mapActions, mapMutations} from 'vuex'

export default Vue.extend({
  name: 'App',
  computed: {
    ...mapGetters(['validPosts']),
   
  },
  methods: {
    ...mapActions(["fetchPosts"])
    
  },
  components: {
    PostForm,
  },
  async mounted() {
    this.fetchPosts(4);
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #081b2e;
  background: rgb(170, 170, 179);
  margin-top: 60px;
}
</style>
