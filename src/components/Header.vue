<template lang="pug">
.container 
        .header 
            img(src="../assets/img/logo.png", alt="")
            .header__box
                img.header__img(src="../assets/img/globe-solid.png", alt="")
                p.header__text 日本語
        .header__block
            .header__box_check
                img.header__img(src="../assets/img/checkin.png", alt="")
                p.header__text Not selected
            .header__box_check
                img.header__img(src="../assets/img/checkout.png", alt="")
                p.header__text Not selected
            .header__box_check
                img.header__img(src="../assets/img/profile.png", alt="")
                p.header__text 2
            button.header__box_button Check Availability
</template>


<style lang="scss">

.container{
    padding: 0 20px;
}
.header{
    margin: 12px 0px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__block{
        border-top: 1px solid #D7D7DC;
        border-bottom: 1px solid #D7D7DC;
        display: flex;
        align-items: center;
        padding: 16px 20px;
    }
    &__text{
        font-family: 'MPLUS1p-Regular';
        font-size: 16px;
        line-height: 24px;
        margin-right: 71px;
    }
    &__img{
        width: 19px;
        height: 19px;
        margin-right: 8px;
    }
    &__box{
        display: flex;
        align-items: center;
        &_check{
            display: flex;
            align-items: center;
        }
        &_button {
            background: #FD7900;
            border-radius: 4px;
            border: none;
            width: 194px;
            height: 48px;
        }
    }
}
</style>