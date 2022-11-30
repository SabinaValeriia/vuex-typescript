<template lang="pug">
.container
    p {{hotel_item_data.page}}
    p {{hotel_item_data.search_object.left_latitude}}
    p {{hotel_item_data.per_page}}
</template>

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