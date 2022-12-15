<template>
    <div id="app">
      <List :people="people" @message="displayMessage"/>
      <InputSearchFilter></InputSearchFilter>
      <InputSearch></InputSearch>

      <MyTextInput></MyTextInput>
      <Parent></Parent>
    </div>
  </template>
  
  <script>
  import Parent from '@/components/Parent'
  import List from '@/components/List'
import InputSearch from './InputSearch.vue';
import InputSearchFilter from './InputSearchFilter.vue';
import MyTextInput from './MyTextInput.vue';

  
  export default {
    components: {
    List,
    InputSearch,
    InputSearchFilter,
    MyTextInput,
    Parent
},
    data() {
      return {
        people: ['Max', 'Jack', 'Leo']
      }
    },
    methods: {
      displayMessage: function(message) {
        this.people.push(message)
      }
    }
  }
  </script>