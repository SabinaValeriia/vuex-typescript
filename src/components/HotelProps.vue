<template>
    <div>
        <div v-bind="todo.img" v-for="todo in todos">
        <p>{{ todo.img }}</p>
        <p>{{ todo.text }}</p>
    </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            todos: [
                { text: "Learn JavaScript", img: "nnivnii" },
                { text: "Learn Vue", img: "nnivnii" },
                { text: "Build something awesome", img: "nnivnii" }
            ]
        };
    }
};

  // };
</script>