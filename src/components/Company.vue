<template>
    <div id="app">
        <p><input type="text" v-model="company" /></p>
        <ul>
            <li v-for="phone in filteredList">
                <p>{{ phone.company }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            company: '',
            phones: [
                { company: 'Monterey Akasaka' },
                {  company: 'Akasaka' },
                {  company: 'Hotel' },
                {  company: 'Monthly' },
                {  company: 'njcnsdj' }
            ]
        }
    },

    computed: {
        filteredList: function () {
            let comp = this.company;
            return this.phones.filter(function (elem) {

                if (comp === '') {
                    return true;
                } else {
                    return elem.company.indexOf(comp) > -1;
                }
            })
        }
    }
};
</script>