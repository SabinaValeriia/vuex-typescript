<template>
    <div>
      <h1>{{ message }}</h1>
      <child @filteredList="filteredList"/>
    </div>
  </template>
  
  <script>
  import Child from "./Child";
  export default {
    name: "Father",
    data() {
      return {
        message: "Where are you, my Childddd?"
      };
    },
    components: {
      Child
    },
    methods: {
        filteredList: function () {
            let hot = this.hotelgroup;
            return this.hotels.filter(function (elem) {

                if (hot === '') {
                    return true;
                } else {
                    return elem.hotelgroup.indexOf(hot) > -1;
                    // return elem.hotelgroup.toLowerCase().split(" ").every((elem) => hot.hotelgroup.toLowerCase().includes(elem)); 
                }
            })
        }
    }
    }

  </script>
  