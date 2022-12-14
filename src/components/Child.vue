<template>
    <div class="hello">
        <input 
                type="text" name="Name hotel" 
                id="" v-model="hotelgroup" >
      <button @click="search">Reply Daddy</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Child",
    props: ["hotels"],
    methods: {
      search() {
        this.$emit("filteredList");
      }
    }
  };
  </script>
  