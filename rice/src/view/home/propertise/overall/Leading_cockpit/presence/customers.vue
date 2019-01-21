<template>
		<div class="customers">
			<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
		</div>		
</template>
<script>
	export default {
		name:"customers",
		data() {
			return {
			id:"customers",
			width:"100%",
			height:"300px",
			xAxis:['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月',],
			clustering:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210],
			incubator:[220, 182, 191, 433, 567, 330, 310,220, 231, 111, 231, 456, 330, 345],
			technology:[220, 345, 191, 234, 111, 42, 45,220, 182, 567, 655, 732, 330, 233],
			contrast:[
				{value:335, name:'进驻客户'},
				{value:310, name:'新签客户'},
				{value:234, name:'迁出客户'},
			],
			option:{
					 title: {
								text: '进驻客户数量',
						x:'left',
						textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
							// fontFamily: 'Arial, Verdana, sans...',
							fontSize: 18,
							backgroundColor:"#f0f",
							fontStyle: 'normal',
							fontWeight: 'normal',
							color:"#fff"
						},
						
					},
					legend: {
						data:['进驻客户','新签客户','迁出客户'],
						right: '3%',
						top: '10%',
						textStyle:{
						color:['#8600cc','#ff0000','#fdb800'],
						},
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: [],
						splitLine: {
							show: false
						}, //去除网格线
						axisLine: {
							lineStyle: {
								type: 'solid',
								color: '#30dbe3',
								width: '1'
							}
						},
					},
					textStyle:{
						color:'#fff',
					},
					yAxis: {
						type: 'value',
						splitLine: {
							show: false
						}, //去除网格线
						axisLine: {
							lineStyle: {
								type: 'solid',
								color: '#30dbe3',
								width: '0'
							}
						},
					},
					series: [
						{
							name:'进驻客户',
							type:'line',
							
							data:[],
							itemStyle: {//直线颜色
								normal: {
		// 									label : {
		// 										show: true,
		// 									},
									color: "#13eefb",
									lineStyle: {
										color: "#13eefb"
									}
								}
							},
							axisLine: {
								lineStyle: {
									type: 'solid',
									color: '#30dbe3',
									width: '1'
								}
							},
						},
						{
							name:'新签客户',
							type:'line',
							// stack: '总量',
							data:[],
							itemStyle: {//直线颜色
								normal: {
									color: "#ff0000",
									lineStyle: {
										color: "#ff0000"
									}
								}
							},
						},
						{
							name:'迁出客户',
							type: 'bar',
							x:20,
							barWidth : 20,//柱图宽度
							// stack: '总量',
							data:[],
	
							itemStyle: {//直线颜色
								normal: {
									color: "#fdb800",
									lineStyle: {
										color: "#fdb800"
									}
								}
							},
						},
						
					
					]
				}
			}
		},
		mounted(){
			this.option.xAxis.data=this.xAxis;
			this.option.series[0].data=this.clustering;
			this.option.series[1].data=this.incubator;
			this.option.series[2].data=this.technology;
		},
		methods: {
		
		}

		
	}
</script>

<style scoped>
	.customers{
		padding: 2% 0;
	}
</style>
