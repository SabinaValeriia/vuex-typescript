<template>
    <div class="container">
        <div class="search__block">
            <input 
                class="search__block_input"
                type="text" 
                placeholder="Name hotel" 
                :value="value"
                @input="$emit('input', $event.target.value)"
                ref="filter"
            >
        </div>

    </div>
</template>

<script>
export default {
   
    props: {
      value: String,
    },
   
};
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