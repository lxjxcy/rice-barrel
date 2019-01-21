<template>
		<div class="business_operation">
			<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
		</div>		
</template>
<script>
	export default {
		name:"business_operation",
		data() {
			return {
				id:"business_operation",
				width:"400px",
				height:"250px",
				xAxis:['第一季度','第二季度','第三季度','第四季度'],
				clustering:[120, 132, 101, 134],
				incubator:[220, 182, 191, 433],
				technology:[220, 345, 191, 234],
				contrast:[
					{value:335, name:'主营业务收入'},
					{value:310, name:'企业税收'},
					{value:234, name:'研发投入'},
				],
				option:{
					 title: {
						text: '企业经营',
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
						data:['主营业务收入','企业税收','研发投入'],
						right: '3%',
						top: '10%',
						textStyle:{
						color:['#8600cc','#fdb800','#ff0000'],
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
							name:'主营业务收入',
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
							name:'企业税收',
							type:'line',
							// stack: '总量',
							data:this.incubator,
						
							itemStyle: {//直线颜色
								normal: {
									color: "#fdb800",
									lineStyle: {
										color: "#fdb800"
									}
								}
							},
						},
						{
							name:'研发投入',
							type: 'bar',
							x:20,
							barWidth : 20,//柱图宽度
							// stack: '总量',
							data:this.technology,
	
							itemStyle: {//直线颜色
								normal: {
									color: "#ff0000",
									lineStyle: {
										color: "#ff0000"
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
	
	.business_operation{
		padding: 0 2%;
		margin-right: 2%;
		/* border-left: 2px solid #fff */
	}

	

</style>
