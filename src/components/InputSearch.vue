<template>
    <div class="">
    <div class="text-white font-normal text-xs h-7 px-2.5 flex items-center transition duration-300 hover:cursor-pointer hover:bg-black-700 hover:rounded-xs"
    v-for="item in filteredList"
    :item="item.value"
    :key="item.id"
    >
    {{item.title}}
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
      search: null,
      items: [
        {id: 1, title: 'Progress', value: "Progress"},
        {id: 2, title: 'Time', value: "Time"},
        {id: 3, title: 'Time', value: "Time"},
        {id: 4, title: 'Live', value: "Live"},
        {id: 5, title: 'Time', value: "Time"},
        {id: 6, title: 'Time', value: "Time"},
        {id: 7, title: 'Time', value: "Time"},
        {id: 8, title: 'Time', value: "Time"},
        {id: 9, title: 'Time', value: "Time"},
        {id: 10, title: 'Time', value: "Time"},
      ],
    }
  },
  computed: {
    filteredList(){
      if(this.search){
        return this.items.filter((item) => {
          return this.search.toLowerCase().split(" ").every((el) => item.title.toLowerCase().includes(el)); 
        });
        
      }else {
        return this.items;
      }
    }
  }
}
</script>