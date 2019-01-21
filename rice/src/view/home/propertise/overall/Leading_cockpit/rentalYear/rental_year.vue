<template>
	<div class="rental_year">
		<div class="all_price">
				<h2>年度租金收入</h2>
				<p class="p1">￥88888888.88</p>
				<ul>
					<li v-for="item in priceall">
						<p class="p2">{{item.name}}</p>
						<p>{{item.value}}</p>
					</li>
				</ul>
				<div class="time">
					<workpiece></workpiece>
				</div>
				<div>
					<chinaMap></chinaMap>
				</div>
					
			
		</div>
		
	</div>
	
</template>

<script>
	import workpiece from "./workpiece.vue"
	import chinaMap from "./chinaMap.vue"
	export default {
		name:"rental_year",
		components:{
			chinaMap,
			workpiece
		},
		data(){
			return{
				priceall:[
					{
						name:"海聚中心",
						value:"124,543,23元"
					},
					{
						name:"海聚中心",
						value:"124,543,23元"
					},
					{
						name:"海聚中心",
						value:"124,543,23元"
					},
					{
						name:"海聚中心",
						value:"124,543,23元"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.rental_year{
		/* border-right: 2px solid #fff; */
		width:700px;
		height:100%;
		
	}
	
	
	.all_price{
		padding: 2%;
		position: relative;
		color:#fff;
	}
	.p1{
		line-height: 70px;
		font-size: 40px;
		color: #fff;
		font-weight: 400;
		text-align: center;
	}
	ul{
		display: flex;
		margin-top: 60px;
		justify-content: space-around;
	}
	li p{
		text-align: center;
		font-size: 18px;
	}
	li .p2{
		color: aqua;
		font-style:italic
	}
	li .p2:hover{
		font-style:italic
	}
	.time{
		position: absolute;
		top:5px;
		right:5px;
	}

</style>
