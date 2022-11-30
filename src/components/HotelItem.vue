<template>
    <div>
         <div class="container ">
           
        
                <p class="t">{{hotel_item_data.page}}</p>
                <p class="t">{{hotel_item_data.search_object.left_latitude}}</p>
                
                <p class="">{{hotel_item_data.per_page}} грн</p>
            <p class="">Подробности</p>
           
        </div>
    
        
    </div>
   
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