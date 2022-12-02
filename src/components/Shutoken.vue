<template lang="pug">
.container 
    .shutoken
        p.shutoken__title Shutoken
        div.shutoken__block
            img.shutoken__block_img(src="../assets/img/map-marker.png")
            p.shutoken__block_text Ginza・Nihonbashi・Tokyo Station Area 
            img.shutoken__block_img(src="../assets/img/map-marker.png")
            p.shutoken__block_text Odaiba・Shiodome・Shimbashi・Shinagawa
        div.shutoken__block
            img.shutoken__block_img(src="../assets/img/map-marker.png")
            p.shutoken__block_text Roppongi・Azabu・Akasaka・Aoyama
            img.shutoken__block_img(src="../assets/img/map-marker.png")
            p.shutoken__block_text Shinjuku・Nakano・Suginami・Kichijoji
        div.shutoken__block
            img.shutoken__block_img(src="../assets/img/map-marker.png")
            p.shutoken__block_text Ueno・Asakusa・Ryogoku・Kinshicho  
            img.shutoken__block_img(src="../assets/img/map-marker.png")
            p.shutoken__block_text Ikebukuro・Mejiro・Itabashi・Akabane
        div.shutoken__block
            img.shutoken__block_img(src="../assets/img/map-marker.png")
            p.shutoken__block_text Shibuya・Meguro・Setagaya・Futakotamagawa
            img.shutoken__block_img(src="../assets/img/map-marker.png")
            p.shutoken__block_text Ochanomizu・Yushima・Kudan・Korakuen
        div.shutoken__block
            img.shutoken__block_img(src="../assets/img/map-marker.png")
            p.shutoken__block_text Western Tokyo (Hachioji・Tachikawa・Machida・Fuchu・Chofu)
            img.shutoken__block_img(src="../assets/img/map-marker.png")
            p.shutoken__block_text Omori・Iwata・Haneda Area
        div.shutoken__block
            img.shutoken__block_img(src="../assets/img/map-marker.png")
            p.shutoken__block_text Izu Islands・Oshima・Ogasawara 
            img.shutoken__block_img(src="../assets/img/map-marker.png")
            p.shutoken__block_text Katsushika・Edogawa・Koto・Arakawa・Adachi
    .shutoken__box
        p.shutoken__title-big Shutoken: 40 hotels found
        p.shutoken__title Sorting
</template>

<style lang="scss">
.shutoken{
    margin-top: 16px;
    width: 755px;
    height: 225px;
    background: rgba(242,242,242,0.5);
    border-radius: 4px;
    padding: 12px 12px;
    margin-bottom: 24px;
    &__box{
        width: 755px;
        display: flex;
        justify-content: space-between;
    }
    
    &__title{
        text-align: left;
        font-family: "MPLUS1p-Bold";
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        color: #1B1B1B;
        margin-bottom: 19px;
        &-big{
            font-family: 'MPLUS1p-Bold';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 24px;
            color: #000000;
        }
    }
    &__block{
        cursor: pointer;
        display: flex;
        justify-content: left;
        align-items: center;
        margin-bottom: 12px;
        &_img{
            margin-right: 8px;
        }
        &_text{
            font-family: 'MPLUS1p-Regular';
            font-weight: 400;
            font-size: 13px;
            line-height: 14px;
            margin-right: 24px;
        }

    }

}
</style>