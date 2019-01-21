<template>
	<div class="rental">
		<div class="rental_price">
			<rentalPrice></rentalPrice>
			<priceContrast></priceContrast>
			<rentalArea></rentalArea>
		</div>
	</div>

	
</template>
<script>
	import rentalArea from "./rental_area.vue"
	import rentalPrice from "./rental_price.vue"
	import priceContrast from "./price_contrast.vue"
	export default {
		name:"rentalMonth",
		components:{
			rentalArea,
			rentalPrice,
			priceContrast
			
		},
		
	}
</script>

<style scoped>
	.rental{
		width:500px;
	}

</style>
