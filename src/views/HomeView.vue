<template lang="pug">
.home 
    <PostForm></PostForm>
    .post(v-for="post in validPosts"  :key="post.id")
      h2 {{post.title}}
      p {{post.body}}
</template>

<script lang="ts">
import Vue from 'vue';
import PostForm from '@/components/PostForm.vue'
import Hotel from '@/components/Hotel.vue'
import Header from '@/components/Header.vue'
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
    PostForm, Header, Hotel
  },
  async mounted() {
    this.fetchPosts(4);
  }
});
</script>