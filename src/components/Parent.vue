<template>
    <div id="app">
  <select v-model="sortBy">
    <option value="">Please select by name or price</option>
    <option value="name">name</option>
    <option value="age">age</option>
  </select>
  <Child :sorted-array="displayArray" />
 
</div>
</template>

<script>
import Child from './Child.vue';


export default{
    components: {  Child },
  data() {
    return{
        sortBy: "",
     array: [
      { name: 'Peter', age: 24},
      { name: 'Beth', age: 15},
      { name: 'Daniel', age: 30},
    ]
    }
    
  },
  computed: {
    displayArray() {
      // declare the compare functions
      // for name
      function cmpName(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }
      // for age
      function cmpAge(a, b) {
        if (a.age < b.age)
          return -1;
        if (a.age > b.age)
          return 1;
        return 0;
      }
      
      if (this.sortBy === "name") return this.array.sort(cmpName);
      else if (this.sortBy === "age") return this.array.sort(cmpAge);
      else return this.array;
    }
  }
}
</script>

