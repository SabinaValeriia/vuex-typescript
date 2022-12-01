<template>
    <div class="home">
     <Header></Header>
     <Hotel></Hotel>
      
     
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Hotel from '@/components/Hotel.vue';
  import Header from '@/components/Header.vue';
  
  export default {
    components: {
    Hotel,
    Header
    
},
props: {
        hotel_data: {
            type: Array,
            default() {
              return []
            }
        },
    },
    
  }
  </script>
  