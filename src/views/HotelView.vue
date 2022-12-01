<template>
    <div class="home">
     <Header></Header>
     <Hotel></Hotel>
      <GoogleMap></GoogleMap>
     
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
import Hotel from '@/components/Hotel.vue';
import Header from '@/components/Header.vue';
import GoogleMap from '@/components/GoogleMap.vue';

  export default {
    components: {
    Hotel,
    Header,
    GoogleMap
    
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
  