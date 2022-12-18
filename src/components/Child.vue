<template>
    <div><div v-for="array in sortedArray">
        <p>{{array.name}}</p>
        <p>{{array.age}}</p>
    </div></div>
</template>

<script>
export default{
    props: {
    sortedArray: {
      type: Array,
      default: () => [],
    }
  }
}
</script>