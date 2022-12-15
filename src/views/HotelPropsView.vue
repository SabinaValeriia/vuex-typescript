<template>
    <div class="home">
      <Header></Header>
      <HotelItemProps :hotels="hotels"></HotelItemProps>
      
    </div>
  </template>
  
  <script lang="ts">
  import Header from "@/components/Header.vue";
  import InputSearch from "@/components/InputSearch.vue";
  import Search from "@/components/Search.vue";
  import InputSearchFilter from "@/components/InputSearchFilter.vue";
  import Test from "@/components/Test.vue";
  // import Company from "@/components/Company.vue";
  import HotelItemProps from "@/components/HotelItemProps.vue";
  export default {
    components: {
      Header,
      Search, 
      HotelItemProps,
      InputSearch,
      InputSearchFilter,
      // Company,
      Test,
    },
    data() {
        return {
            search: '',
            hotels: [
                {
                    id: 1,
                    name: 'Hotel',
                    img: 'foto1.png',
                    desc: '単語が中国の文献などにみえはじめる単語が中国の文献などにみえはじめる単語が中国の文献などにみえはじめる単語が中国の文献などにみえはじめる'
                },
                {
                    id: 2,
                    name: 'Akasaka',
                    img: 'foto2.png',
                    desc: '単語が中国の文献などにみえはじめる単語が中国の文献などにみえはじめる単語が中国の文献などにみえはじめる単語が中国の文献などにみえはじめる'
                },
                {
                    id: 3,
                    name: 'Monterey Akasaka',
                    img: 'foto2.png',
                    desc: '単語が中国の文献などにみえはじめる単語が中国の文献などにみえはじめる単語が中国の文献などにみえはじめる単語が中国の文献などにみえはじめる'
                },
            ]
        }
    },
  }
    
    
    
  </script>
  
  