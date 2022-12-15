<template>


<div id="app">
  <MyInput :name.sync="search"></MyInput>
  <hr>
  <ul>
    <li v-for="hotel in filteredData">{{ hotel.name }}</li>
  </ul>
</div>
</template>


<script lang="ts">
import MyInput from './MyInput.vue';

export default {
    data: () => ({
        hotels: [
          {name:"John"},
          {name: "Jane"},
          {name: "Jim"}, 
          {name: "Jim"}, 
          {name: "Maggy"}, 
          {name: "Trump"}, 
          {name: "Che"}, 
          ],
        search: "",
    }),
    computed: {
        filteredData: function () {
          if (this.search) {
          return this.hotels.filter((item) => {
            return this.search
              .toLowerCase()
              .split(" ")
              .every((v) => item.name.toLowerCase().includes(v));
          });
        } else {
          return this.hotels;
        }
            // simple filter function
            // return this.rawData.filter(el => el.toLowerCase()
            //     .match(this.filter.toLowerCase()));
        }
    },
    components: { MyInput }
}

</script>