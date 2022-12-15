<template>
    <div>
        <MyTextInput @custom-change="handleCustomChange" /> 
        <p>Uppercase: {{ uppercase }}</p>
    </div>
</template>


<script>
import MyTextInput from '@/components/MyTextInput.vue';

  export default {
    data() {
        return {
            uppercase: ''
        };
    },
    methods: {
        handleCustomChange(s) {
            this.uppercase = s;
        }
    },
    components: { MyTextInput }
}

</script>