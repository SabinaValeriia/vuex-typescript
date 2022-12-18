<template>
  <div>
    <button @click="totalCount = totalCount + 1">Click me</button>
  <p>{{ message }}</p>
  </div>
</template>

<script>
export default { 
  name: "Counter",
  data() {
      return {
          // "message" will show up in the template above in 
          message: "You haven't clicked yet!",
          // This is the total number of times the button has been clicked
          totalCount: 0
      }
  },
  watch: {
      // Watch totalCount for any changes
      totalCount: function(newValue) {
          // Depending on the value of totalCount, we will display custom messages to the user
          if(newValue <= 10) {
              this.message = `You have only clicked ${newValue} times.`;
          }
          else if(newValue <= 20) {
              this.message = `Wow, you've clicked ${newValue} times!`;
          }
          else {
              this.message = `Stop clicking, you've already clicked ${newValue} times!`;
          }
      }
  }
}
</script>
