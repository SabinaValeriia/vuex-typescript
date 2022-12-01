<template lang="pug">
.user
    <Header></Header>
    .user_block(v-for="user in validUsers" :key="user.id")
        h2 Name - {{user.name}}
        p Username -{{user.username}}
</template>
    
<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue'
import { mapGetters, mapActions, mapMutations} from 'vuex'
    
    export default Vue.extend({
      name: 'User',
      computed: {
        ...mapGetters([ 'validUsers']),
       
      },
      methods: {
        ...mapActions([ "fetchUsers"])
        
      },
      components: {
        Header
      },
      async mounted() {
        this.fetchUsers();
      }
    });
</script>
    
<style lang="scss">
    h2{
        font-weight: 800;
        padding: 20px;
    }
</style>