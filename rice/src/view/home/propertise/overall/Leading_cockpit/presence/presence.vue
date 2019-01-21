<template>
	<div class="presence">
		<div class="customers">
			<customers></customers>
		</div>
		<div class="company">
			<company></company>
		</div>
	</div>
	
</template>

<script>
	import customers from "./customers.vue"
	import company from "./company.vue"
	export default {
		
		name:"presence",
		components:{
			company,
			customers
		},
		
	}
</script>

<style scoped>
	.presence{
		/* border-right: 2px solid #fff; */
		width:600px;
		height:100%;
		
	}
	.customers{
		/* padding: 2%; */
		/* margin-right: 2%; */
	}
	.company{
		/* border-top:1px solid #fff */
	}

</style>
