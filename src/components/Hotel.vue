<template lang="pug">
.hotel
    <Shutoken></Shutoken>
    <HotelItem v-for="(hotel, index) in HOTELS" :key="hotel.article" :hotel_item_data="hotel"></HotelItem>  


</template>

<script lang="ts">
import Vue from 'vue';
import {mapActions, mapGetters} from 'vuex'
import HotelItem from './HotelItem.vue';
import Shutoken from './Shutoken.vue';

export default Vue.extend({
    // props: {
    //     hotel_data: {
    //         type: Array,
    //         default() {
    //           return []
    //         }
    //     },
    // },
    computed: {
        ...mapGetters([
            'HOTELS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_HOTELS_FROM_API'
        ]),
    },
    mounted() {
        this.GET_HOTELS_FROM_API()
    },

    components: {  HotelItem, Shutoken }
});
    </script> 