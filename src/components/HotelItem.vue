<template lang="pug">
.container
    .hotel__card 
        .hotel__card_block
            img.hotel__card_img(:src="require(`@/assets/img/${hotel_item_data.img}`)")
            button.hotel__card_button Hotel details
        .hotel__card_block
            p.hotel__card_title {{hotel_item_data.name}}
            p.hotel__card_text {{hotel_item_data.autocomplete_params.address_components}}
            p {{hotel_item_data.page}}
            p {{hotel_item_data.search_object.left_latitude}}
            p {{hotel_item_data.per_page}}
</template>

<style lang="scss">
.hotel__card{
    display: flex;
    border: 1px solid #E1E1E1;
    border-radius: 4px;
    padding: 12px;
    &_title{
        font-family: "MPLUS1p-ExtraBold";
        font-size: 16px;
        line-height: 24px;
        font-weight: 800;
        color: #000000;
    }
    &_button{
        width: 260px;
        height: 40px;
        background: #FD7900;
        border-radius: 4px;
        font-family: "MPLUS1p-Regular";
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        border: none;
        margin: 12px 0px 0px 0px;
    }
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

