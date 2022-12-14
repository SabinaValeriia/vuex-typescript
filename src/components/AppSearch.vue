<template>
    <input type="text" v-model="searchQuery">
</template>

<script>
    export default {
      props: ['bookmarks'],
        data() {
            return {
              searchQuery: null,
            }
        },
        watch: {
        searchQuery(newValue) {
          let filteringBookmarks=[]
         if(newValue){
           filteringBookmarks=this.bookmarks.filter(data => data.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
         }else{
           filteringBookmarks=this.bookmarks;
         }

          this.$emit('update:bookmarks',  filteringBookmarks)
        }
    },
    }
</script>