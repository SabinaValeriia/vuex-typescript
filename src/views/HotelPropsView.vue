<template>
    <div class="home">
      <Header></Header>
      <Search></Search>
      <HotelItemProps></HotelItemProps>
      <ToDoList :todos="todos"/>
      <!-- <Test></Test> -->
      <InputSearch></InputSearch>
      <InputSearchFilter></InputSearchFilter>
      <Company></Company>
    </div>
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  import Search from "@/components/Search.vue";
  import ToDoList from "@/components/ToDoList.vue";
  import InputSearch from "@/components/InputSearch.vue";
  import InputSearchFilter from "@/components/InputSearchFilter.vue";
  import Test from "@/components/Test.vue";
  import Company from "@/components/Company.vue";
  import HotelItemProps from "@/components/HotelItemProps.vue";
  export default {
    components: {
      Header,
      Search, 
      HotelItemProps,
      InputSearch,
      InputSearchFilter,
      ToDoList,
      Company,
      Test,
      data() {
    return {
      todos: [
        { id: 1, task: "todo 1", finished: false },
        { id: 2, task: "todo 2", finished: true },
        { id: 3, task: "todo 3", finished: false },
        { id: 4, task: "todo 4", finished: true },
        { id: 5, task: "todo 5", finished: false }
      ],
    }
  }
    },
    
    
    }
  </script>
  
   <!-- <template>
    <div id="app">
      <HotelProps></HotelProps>
      <HotelItemProps></HotelItemProps> -->
    
        <!-- <div v-bind="todo.img" v-for="todo in todos">
          <p>{{todo.img}}</p>
          <p>{{todo.text}}</p>
        </div> -->
        <!-- <li v-bind="todo.img" v-for="todo in todos">{{ todo.img }}</li> -->
        <!-- <p>{{todo.img}}</p> -->
     
    <!-- </div>
  </template> -->
  
  <!-- <script>
  import HotelProps from "@/components/HotelProps.vue";
  import HotelItemProps from "@/components/HotelItemProps.vue";
  export default {
    components: {
      HotelProps,
      HotelItemProps
    },

  } -->
  <!-- // };
  // </script> -->
  
  