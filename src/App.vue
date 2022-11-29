<template lang="pug">
  #app
    <PostForm></PostForm>
    .post(v-for="post in validPosts"  :key="post.id")
      h2 {{post.title}}
      p {{post.body}}

    .user(v-for="user in validUsers" :key="user.id")
      h2 {{user.name}}
      p {{user.username}}
     

</template>

<script lang="ts">
import Vue from 'vue';
import PostForm from './components/PostForm.vue'
import { mapGetters, mapActions} from 'vuex'

export default Vue.extend({
  name: 'App',
  computed: {
    ...mapGetters(['validPosts', 'validUsers']),
   
  },
  methods: {...mapActions(["fetchPosts", "fetchUsers"])},
  components: {
    PostForm,
  },
  async mounted() {
    this.fetchPosts(4);
    console.log(111);
    this.fetchUsers();
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 10px;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
