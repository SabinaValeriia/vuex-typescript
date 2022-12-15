<template lang="pug">
.container
    Search(:name.sync="search")
    .hotel__card(v-for="hotel in searchResult" :key="hotel.id")
        .hotel__card_content
            div(style="display: flex; flex-direction: column")
                img.hotel__card_img(:src="require(`@/assets/img/${hotel.img}`)")
                button.hotel__card_button Hotel details
            .hotel__card_block
                p.hotel__card_title {{hotel.name}}
                p.hotel__card_text {{hotel.desc}}
                .hotel__card_box 
                    button.hotel__card_box_button-first Go to トラベル対応
                    .hotel__card_box_button-second 
                        img(src="../assets/img/icon-green.png" style="margin-right: 5px") 
                        p 新型コロナウイルス対策あり
                    .hotel__card_box_button-second Tag 3
                div.hotel__card_box-second
                    img(src="../assets/img/map-marker.png" style="width: 12px; height: 16px; margin: 6px 12px 0px 0px")
                    p.hotel__card_text 単語が中国の文献などにみえはじめる単語が中国の文献などにみえはじめる単語が中国の文献などにみえはじめる単語が中国の文献な
                div.hotel__card_box-third
                    img(src="../assets/img/time.png" style="width: 20px; height: 20px; margin: 6px 12px 0px 0px")
                    p.hotel__card_text Booked 20 minutes ago
                .hotel__card_box-third
                    .hotel__card_needs
                        img(src="../assets/img/parking.png")
                        p.hotel__card_needs_text Parking lot
                    .hotel__card_needs
                        img(src="../assets/img/restaurant.png")
                        p.hotel__card_needs_text Restaurant
                    .hotel__card_needs
                        img(src="../assets/img/bath.png")
                        p.hotel__card_needs_text Bath house
                    .hotel__card_needs
                        img(src="../assets/img/Laundry.png")
                        p.hotel__card_needs_text Laundry
                    .hotel__card_needs
                        img(src="../assets/img/wifi.png")
                        p.hotel__card_needs_text Wifi
        .hotel__card_content-second
            .hotel__card_smoking
                img.hotel__card_smoking_img(src="../assets/img/person.png")
                p.hotel__card_smoking_text Standard Single (No smoking)
            .hotel__card_price_block
                .hotel__card_price
                    p.hotel__card_price_text Price without discount
                    p.hotel__card_price_text-sum ¥22,300
                .hotel__card_price
                    button.hotel__card_price_button Go to トラベル対応 35$ Off!
                    p.hotel__card_price_text-red ¥19,200
                p.hotel__card_price_text Tax Included
    button.hotel__card_more_button See more plans
</template>

<script lang="ts">
import Search from '@/components/Search.vue';
export default {
    components: {
        Search,
    },

    data: () => ({
        
        search: '',
   
    }),
    props: {
        hotels: {
            type: Array
        }
    },
    computed: {
        searchResult() {
            if (this.search) {
                return this.hotels.filter((item) => {
                    return this.search
                        .toLowerCase()
                        .split(" ")
                        .every((v) => item.name.toLowerCase().includes(v));
                });
            } else {
                return this.hotels;
            }
        },
    },
    watch: {
        searchResult() {
            console.log("Search", this.search)
        }
      }

}
</script>