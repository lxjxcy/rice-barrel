<template>
	
	<div>
		<table class="tab1 echartall">
			<tr>
				<th>企业资质资质名称</th>
				<th>数量</th>
			</tr>
			<tr v-for="item in list">
				<td>{{item.name}}</td>
				<td style="color: #00d1d9">{{item.num}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name:"aptitude",
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			for(var i=0;i<6;i++){
				this.list.push(
					{
						name:"省级工业设计中心",
						num:"100"
					}
				)
			}
		}
	}
</script>

<style scoped>
	.tab1{
		width:260px;
		height:240px;
		margin-right:10px;
		/* border:2px solid #fff; */
		/* margin-top: 60px; */
	}
	.tab1 tr th{
		width: 20%;
		text-align: center;
		line-height: 50px;
		font-size: 18px;
		color:#ffb400;
	}
	.tab1 tr td{
		width: 20%;
		text-align: center;
		overflow: hidden;
		line-height: 20px;
		text-overflow: ellipsis;
		white-space: nowrap
	}

</style>
