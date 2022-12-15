<template>
    <input :value="name" @input="updateFilter">
</template>

<script>
export default{
    props: ['name'],
      methods: {
        updateFilter: function(e) {
          this.$emit('update:name', e.target.value) 
        }
      }
}
</script>