<template>
    <div>
      <input
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
        ref="filter"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: String,
    },
  };
  </script>