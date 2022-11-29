<template lang="pug">
    form(@submit.prevent="submit")
      input(type="text" placeholder="title" v-model="title")
      input(type="text" placeholder="body" v-model="body")
      button(type="submit") Create Post
      hr
</template>
<script>
  import { mapMutations } from "vuex";
  export default {
    data() {
      return {
        title: "",
        body: ""
      };
    },
    methods: {
      ...mapMutations(["createPost"]),
      
      submit() {
        this.createPost({
          title: this.title,
          body: this.body,
          id: Date.now()
        });
        this.title = this.body = "";
      }
    }
  };
  </script>


<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  width: 300px;
  padding: 10px;
  margin: 10px;
}

button {
  width: 300px;
  background-color: rgb(196, 196, 216);
  padding: 10px;
}
</style>