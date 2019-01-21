<template>
	<div class="overall">
		<div class="out-work">
			<ul>			
				<!-- <li class="l"><parent></parent></li> -->
				<li class="l"><rentalMonth></rentalMonth></li>
				<li class="l"><rentalYear></rentalYear></li>
				<li class="l"><presence></presence></li>
				 <li class="l"><entrepreneurData></entrepreneurData></li>
				<li class="l"><businessAnalysis></businessAnalysis></li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	import rentalMonth from "./Leading_cockpit/rentalMonth/rentalMonth.vue"
	import rentalYear from "./Leading_cockpit/rentalYear/rental_year.vue"
	import presence from "./Leading_cockpit/presence/presence.vue"
	import entrepreneurData from "./entrepreneur_data/entrepreneur_data.vue"
	import businessAnalysis from "./business_analysis/business_analysis.vue"
	import parent from "./parent.vue"
	export default {
		name:"overall",
		components:{
			parent,
			rentalMonth,
			rentalYear,
			presence,
			entrepreneurData,
			businessAnalysis
		},
		

	}

</script>
<style scoped>
/* li{
	margin: 5px;
} */
	.out-work{
		display: flex;
		justify-content:left;
		
		
	}
	.fastlist{
		position: relative;
		top:-300px;
		left:20px;
	}




</style>