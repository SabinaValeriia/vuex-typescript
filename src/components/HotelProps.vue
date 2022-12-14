<template>
    <div>
        <Search v-model="search" ref="searchFilter"></Search>
        <div v-for="hotel in searchResult" :key="hotel.id">
            {{hotel.name}}
        </div>
        
 
    </div>
</template>

<script>
import Search from '@/components/Search.vue'
export default {
    components: {
      Search,
    },
    data() {
        return {
            search: null,
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
    computed: {
        // filteredList() {
        //     let hot = this.search
        //     return this.hotels.filter(function(elem){
        //         if(hot === '') {
        //             return true;
        //         }else {
        //             return elem.search.indexOf(hot) > -1;
        //         }
        //     })
        // }
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
    }
}
</script>