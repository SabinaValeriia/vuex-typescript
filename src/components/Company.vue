<template>
    <div id="app">
	<p><input type="text" v-model="company" /></p>
	<ul>
	  <li v-for="phone in filteredList">
		<p>{{ phone.title }} - {{ phone.company }}</p>
	</li>
	</ul>
</div>
</template>

<script>
    export default{
        el: '#app',
        data: {
			company: '',
			phones: [
				{title:'iPhone 7', company:'Apple'}, 
				{title:'iPhone 6S', company:'Apple'},
				{title:'Galaxy S8', company:'Samsung'},
				{title:'Galaxy S7 Edge', company:'Samsung'},
				{title:'Nokia N8', company:'HMD Global'}]
		},
		computed:{
			filteredList: function(){
				let comp = this.company;
				return this.phones.filter(function (elem) {
				
					if(comp==='') return true;
					else return elem.company.indexOf(comp) > -1;
				})
			}
		}
    };
</script>