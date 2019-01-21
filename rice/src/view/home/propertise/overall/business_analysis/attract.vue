<template>
		<div class="attract">
			<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
		</div>		
</template>
<script>
	export default {
		name:"attract",
		data() {
			return {
				id:"attract",
				width:"600px",
				height:"230px",
				xAxis:['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月',],
				clustering:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210],
				technology:[220, 345, 191, 234, 111, 42, 45,220, 182, 567, 655, 732, 330, 233],
				option:{
					 title: {
						text: '招商需求分析',
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
						data:['剩余租赁面积','招商意向面积'],
						right: '3%',
						top: '10%',
						textStyle:{
						color:['#8600cc','#ff0000'],
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
						data: this.xAxis,
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
						name: '(单位：万平方米)',
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
							name:'剩余租赁面积',
							type:'line',
							
							data:this.clustering,
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
							name:'招商意向面积',
							type: 'bar',
							x:20,
							barWidth : 20,//柱图宽度
							// stack: '总量',
							data:this.technology,
	
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
			this.getChart();
		},
		methods: {
		 getChart(){
			 this.option.series[0].data=this.clustering
				this.option.series[1].data=this.technology
				this.option.xAxis=this.xAxis;
			},
		}

		
	}
</script>

<style scoped>
	.attract{
		margin-left: 2%;
	}


	

</style>
