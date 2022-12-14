<template>
    <div class="home">
      <Header></Header>
      <Search v-model:search="search"></Search>
    </div>
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  import Search from "@/components/Search.vue";
  import CustomInput from '@/components/CustomInput.vue'
  import AppSearch from "@/components/AppSearch.vue";
  import ToDoList from "@/components/ToDoList.vue";
  import Father from "@/components/Father.vue";
  import InputSearch from "@/components/InputSearch.vue";
  import InputSearchFilter from "@/components/InputSearchFilter.vue";
  import Test from "@/components/Test.vue";
  // import Company from "@/components/Company.vue";
  import HotelItemProps from "@/components/HotelItemProps.vue";
  export default {
    components: {
      Header,
      Search, 
      HotelItemProps,
      InputSearch,
      InputSearchFilter,
      ToDoList,
      Father,
      AppSearch,
      // Company,
      CustomInput,
      Test,
    },
      data() {
    return {
      search: '',
    }
  }
    }
    
    
    
  </script>
  
  