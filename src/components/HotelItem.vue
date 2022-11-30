<template lang="pug">
.container
    .hotel__card 
        img.hotel__card_img(:src="require(`@/assets/img/${hotel_item_data.img}`)")
        .hotel__card_block
            p {{hotel_item_data.name}}
            p {{hotel_item_data.page}}
            p {{hotel_item_data.search_object.left_latitude}}
            p {{hotel_item_data.per_page}}
</template>

<style lang="scss">
.hotel__card{
    display: flex;
    &_img{
        width: 260px;
        height: 195px;
    }
    &_block{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 25px;
    }
}
</style>

<script lang="ts">
import {mapGetters} from 'vuex'
import Vue from 'vue'

    export default Vue.extend({
    props: {
        hotel_item_data: {
            type: Object,
            default() {
                return {};
            }
        },
    },
    computed: {
        ...mapGetters([
            'HOTEL'
        ])
    },
 
});
</script>

