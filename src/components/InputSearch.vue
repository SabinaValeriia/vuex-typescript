<template>
    <div class="">
      <input type="text" v-model="search" />
    <div class="text-white font-normal text-xs h-7 px-2.5 flex items-center transition duration-300 hover:cursor-pointer hover:bg-black-700 hover:rounded-xs"
    v-for="item in filteredList"
    :item="item.value"
    :key="item.id"
    >
    {{item.search}}
    {{item.id}}
    </div>
    
  </div>
</template>

<script>
import InputSearchFilter from "@/components/InputSearchFilter.vue";
export default {
    components: {
    InputSearchFilter
  },
  data(){
    return {
      search: '',
      items: [
        {id: 1, search: 'Abc', value: "Progress"},
        {id: 2, search: 'Time', value: "Time"},
        {id: 3, search: 'Time', value: "Time"},
        {id: 4, search: 'Live', value: "Live"},
        // {id: 5, title: 'Time', value: "Time"},
        // {id: 6, title: 'Time', value: "Time"},
        // {id: 7, title: 'Gyy', value: "Time"},
        // {id: 8, title: 'Time', value: "Time"},
        // {id: 9, title: 'Time', value: "Time"},
        // {id: 10, title: 'Time', value: "Time"},
      ],
    }
  },
  computed: {
    // filteredList(){
    //   if(this.search){
    //     return this.items.filter((item) => {
    //       return this.search.toLowerCase().split(" ").every((el) => item.title.toLowerCase().includes(el)); 
    //     });
        
    //   }else {
    //     return this.items;
    //   }
    // }
    filteredList() {
            let comp = this.search;
            return this.items.filter(function (elem) {

                if (comp === '') {
                    return true;
                } else {
                    return elem.search.indexOf(comp) > -1;
                }
            })
        }
  }
}
</script>