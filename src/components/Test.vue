<template>
    <div id="app">
  <input type="text" v-model="search">
  <ul>
    <li v-for="todo in todosByTitle" :key="todo.id">{{ todo.title }}</li>
  </ul>
</div>
</template>

<script>
export default{
  el: '#app',
  data() {
    return {
      search: '',
      todos: [
        
      ],
    };
  },
  computed: {
    todosByTitle() {
      return this.todos.filter(item => item.title.indexOf(this.search) !== -1)
    },
  },
  beforeMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.todos = json;
      })
  },
}
</script>