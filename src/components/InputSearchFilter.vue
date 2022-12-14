<template>
    <input 
  type="text" 
  class="bg-transparent w-full px-2.5 h-7 border border-gray-900 text-gray-100 font-normal text-xs rounded-xs placeholder:text-gray-100 placeholder:font-normal placeholder:text-xs focus:border-purple caret-purple" 
  placeholder="Sort by..."
  
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
  ref="filter"

  
  >
</template>

<script>
export default {
  name: "InputSearchFilter",
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>
 