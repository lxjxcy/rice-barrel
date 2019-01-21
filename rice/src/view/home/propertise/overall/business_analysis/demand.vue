<template>
	<div class="demand echartall">
		<table>
			<caption>{{title1}}</caption>
			<tr v-for="(item,index) in list1">
				<td>{{index+1}}</td>
				<td>{{item.name}}</td>
				<td>{{item.value1}},{{item.value2}}</td>
			</tr>
		</table>
		<table>
			<caption>{{title2}}</caption>
			<tr v-for="(item,index) in list1">
				<td>{{index+1}}</td>
				<td>{{item.name}}</td>
				<td>{{item.value1}},{{item.value2}}</td>
			</tr>
		</table>
		
	</div>
</template>

<script>
	export default {
		name:"demand",
		data(){
			return{
				title1:"企业政策需求排行",
				title2:"企业服务需求排行",
				list1:[
					{
						name:"财政引导",
						value1:"2233",
						value2:"123"
					},
					{
						name:"金融扶持",
						value1:"2233",
						value2:"123"
					},
					{
						name:"人才激励",
						value1:"2233",
						value2:"123"
					},{
						name:"税收优惠",
						value1:"2233",
						value2:"123"
					}
				],
				list2:[
					{
						name:"金融服务",
						value1:"2233",
						value2:"123"
					},
					{
						name:"项目申报",
						value1:"2233",
						value2:"123"
					},
					{
						name:"人力资源",
						value1:"2233",
						value2:"123"
					},{
						name:"法律服务",
						value1:"2233",
						value2:"123"
					}
				]
			}
		}
		
	}
</script>

<style scoped>
.demand{
	width:100%;
	display: flex;
	justify-content: space-between;
	position: relative;
	/* top:-30px; */margin:2%;
	padding-bottom: 3%;
	/* border-left: 2px solid #fff;
	border-bottom: 2px solid #fff; */
}
table tr td{
	width:20%;
	text-align: center;
	line-height: 30px;
	font-size: 14px;
}
table caption{
	text-align: left;
	line-height: 60px;
	font-size: 20px;
	font-weight: 500;
	padding-left:30px;
}
</style>
