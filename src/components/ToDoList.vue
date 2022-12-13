<template>
    
    <div class="ToDoList">
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                {{ todo.task }}
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
  props: {
    todos: { type: Array, required: false, default: () => [{ id: 0, task: "No Tasks Provided", finished: false }] 
  },
  created()  {
    console.log("Created ToDoList");
  }
}
    }

</script>