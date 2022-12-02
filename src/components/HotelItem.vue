<template lang="pug">
.container
    .hotel__card 
        .hotel__card_content
            div(style="display: flex; flex-direction: column")
                img.hotel__card_img(:src="require(`@/assets/img/${hotel_item_data.img}`)")
                button.hotel__card_button Hotel details
            .hotel__card_block
                p.hotel__card_title {{hotel_item_data.name}}
                p.hotel__card_text {{hotel_item_data.desc}}
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

<style lang="scss">

.hotel__card{
    border: 1px solid #E1E1E1;
    border-radius: 4px;
    padding: 12px;
    width: 100%;
    height: auto;
    &_more_button {
        width: 100%;
        height: 32px;
        background: #F8F8F8;
        border: 1px solid #E1E1E1;
        font-family: "MPLUS1p-Medium";
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #1B1B1B;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
    }
    &_price{
        display: flex;
        align-items: center;
        margin: 8px 0px 5px 0px;
        &_block{
            display: flex;
            align-items: flex-end;
            flex-direction: column;
        }
        &_button{
            background: rgba(235, 56, 39, 0.1);
            border-radius: 2px;
            padding: 3px 8px;
            font-family: 'MPLUS1p-Bold';
            font-weight: 700;
            font-size: 11px;
            line-height: 16px;
            color: #EB3827;
            border: none;
            width: max-content;
        }
        &_text{
            font-family: 'MPLUS1p-Regular';
            font-weight: 400;
            font-size: 13px;
            line-height: 19px;
            color: #64646D;
            &-sum{
                font-family: 'MPLUS1p-Medium';
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                text-align: right;
                color: #64646D;
                margin-left: 9px;
            }
            &-red{
                font-family: 'MPLUS1p-Bold';
                font-weight: 700;
                font-size: 20px;
                line-height: 17px;
                color: #EB3827;
                margin-left: 14px;
            }
        }

    }
    &_smoking{
        display: flex;
        align-items: center;
        &_img{ 
            margin-right: 6px;
        }
        &_text{
            font-family: "MPLUS1p-Medium";
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #1B1B1B;
            
        }
    }
    &_content{
        display: flex;
        &-second{
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #E1E1E1;
            width: 100%;
            padding-top: 16px;
            margin-top: 15px;
        }
    }
    &_needs{
        border-top: 1px solid #E1E1E1;
        padding-top: 15px;
        width: 100%;
        &_text{
            font-family: 'MPLUS1p-Regular';
            font-weight: 400;
            font-size: 12px;
            line-height: 20px;
            color: #82828A;

        }
    }
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
    &_text {
        font-family: 'MPLUS1p-Regular';
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        color: #000000;
        text-align: left;
        margin: 6px 0px 19px 0px;
    }
    &_box{
        display: flex;
        &_button{
        &-first{
            background: linear-gradient(90deg, #FAF46F -38.31%, #FF7000 202.45%);
            border-radius: 2px;
            width: max-content;
            height: 22px;
            font-family: "MPLUS1p-Bold";
            font-weight: 700;
            font-size: 11px;
            line-height: 16px;
            color: #000000;
            display: flex;
            align-items: center;
        }
        &-second {
            margin-left: 6px;
            border: 1px solid #D7D7DC;
            border-radius: 2px;
            width: max-content;
            height: 22px;
            font-family: "MPLUS1p-Bold";
            font-weight: 700;
            font-size: 11px;
            line-height: 16px;
            color: #64646D;
            display: flex;
            padding: 4px 7px;
            align-items: center;
        }
    }
   
}
&_box{
    &-second{
        margin-top: 18px;
        display: flex;
    }
    &-third {
        display: flex;
    }
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

