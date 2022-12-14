<script>
export default {
  props: ['title'],
  emits: ['update:title']
}
</script>

<template>
  <input
    type="text"
    v-bind:value="title"
    v-on:input="$emit('update:title', $event.target.value)"
  />
</template>