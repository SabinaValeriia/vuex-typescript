<template lang="pug">
.container
    .search__block
        select(class="search__block_select"
            :value="name, price" 
            @input="sortBy")
            option(value="") Please select by name or price
            option(value="name") name
            option(value="price") price

</template>

<script lang="ts">
export default {
    props: ['name', 'price'],
    methods: {
        sortBy: function (e) {
            this.$emit('update:name', e.target.value)
            this.$emit('update:price', e.target.value)
        }
    },

}
</script>

<style lang="scss">
.search__block {
    display: flex;
    justify-content: left;

    &_select {
        background: #FFFFFF;
        border: 1px solid #E1E1E1;
        width: 300px;
        padding: 10px;
        margin: 10px;
    }
}
</style>