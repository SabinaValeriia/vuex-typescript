<template>
    <div class="container">
        <div class="search__block">
            <input 
            type="text" 
            placeholder="Name hotel" 
            :value="search"
            @input="$emit('update:search', $event.target.value)">
            <button class="serch__button">Search</button>
            <HotelItemProps></HotelItemProps>

        </div>

    </div>
</template>

<script>
import HotelItemProps from './HotelItemProps.vue';

export default {
    data() {
        return {
        };
    },
    props: ['search'],
    emits: ['update:search'],
    components: { HotelItemProps }
};
</script>