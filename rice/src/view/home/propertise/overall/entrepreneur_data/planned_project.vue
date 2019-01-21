<template>
	<div class="planned_project">
		<table class="tab1 echartall">
			<tr>
				<th>国家级科技计划项目top10</th>
				<th>数量</th>
			</tr>
			<tr v-for="item in list">
				<td>{{item.name}}</td>
				<td style="color: #00d1d9">{{item.num}}</td>
			</tr>
		</table>
		<table class="tab2 echartall">
			<tr v-for="(item,index) in list2">
				<td style="width:20px;background: #CCCCCC;border-radius: 50%;color: #000;">{{index}}</td>
				<td>{{item.name}}</td>
				<td style="color: #00d1d9">{{item.num1}},{{item.num2}}</td>
			</tr>
		</table>
	</div>
	
</template>

<script>
	export default {
		name:"planned_project",
		data(){
			return{
				list:[],
				list2:[],
			}
		},
		mounted(){
			for(var i=0;i<5;i++){
				this.list.push(
					{
						name:"科技型中小企业技术创新基金",
						num:"100"
					}
				)
			}
			for(var i=0;i<5;i++){
				this.list2.push(
					{
						name:"浙江省千人计划",
						num1:"2233",
						num2:"345"
					}
				)
			}
			
			
			
			
			
		}
	}
</script>

<style scoped>
	.planned_project{
		/* border-left: 2px solid #fff; */
		display: flex;
		width:1000px;
		margin-top: 1%;
		justify-content: space-between;
	}
	.tab1 tr th{
		width: 20%;
		text-align: center;
		line-height: 20px;
		/* font-size: 20px; */
		color:#ffb400;
	}
	.tab1 tr td{
		width: 200px;
		text-align: center;
		overflow: hidden;
		line-height: 20px;
		text-overflow: ellipsis;
		white-space: nowrap
	}
	.tab1{
		padding: 1%;
		width:49%;
		height:210px;
		
		
	}
	.tab2{
		padding: 1%;
		width:49%;
		height:210px;
	}
	.tab2 tr td{
		width: 150px;
		text-align: center;
		overflow: hidden;
		/* line-height: 16px; */
		line-height: 20px;
		text-overflow: ellipsis;
		white-space: nowrap
	}
</style>
