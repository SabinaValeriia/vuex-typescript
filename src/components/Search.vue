<template>
    <div class="container">
        <div class="search__block">
            <input 
                class="search__block_input"
                type="text" 
                placeholder="Name hotel" 
                :value="name"
                @input="updateFilter"
                ref="filter"
            >
        </div>

    </div>
</template>

<script lang="ts">
export default{
    props: ['name'],
      methods: {
        updateFilter: function(e) {
          this.$emit('update:name', e.target.value) 
        }
      }
}
</script>

<style lang="scss">
.search__block{
    display: flex;
    justify-content: left;
    &_input{
        background: #FFFFFF;
        border: 1px solid #E1E1E1;
    }
}
</style>