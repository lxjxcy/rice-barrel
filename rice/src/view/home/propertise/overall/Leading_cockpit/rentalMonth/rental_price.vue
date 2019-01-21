<template>
	<div>
		<div class="rental_price">
			<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
		</div>
	
	</div>
	
</template>
<script>	
	export default {
		name:"rental_price",
		data() {
			return {
				id:"rental_price",
				width:"100%",
				height:"250px",
				xAxis:['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月',],
				clustering:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210],
				incubator:[220, 182, 191, 433, 567, 330, 310,220, 231, 111, 231, 456, 330, 345],
				technology:[220, 345, 191, 234, 111, 42, 45,220, 182, 567, 655, 732, 330, 233],
				accelerator:[220, 152, 191, 244, 230, 344, 310,220, 45, 191, 78, 290, 99, 310],
				contrast:[
					{value:335, name:'海聚中心'},
					{value:310, name:'孵化器'},
					{value:234, name:'生命科技中心'},
					{value:135, name:'加速器'},
				],
			
				option:{
				     title: {
						text: '租金收入月度趋势(万元)',
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
						data:['海聚中心','孵化器','生命科技中心','加速器'],
						right: '3%',
						top: '10%',
						textStyle:{
						color:['#8600cc','#ff0000','#fdb800','#d717ff'],
						},
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true,
						
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
							name:'海聚中心',
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
							name:'孵化器',
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
							name:'生命科技中心',
							type:'line',
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
						{
							name:'加速器',
							type:'line',
							// stack: '总量',
							data:[],
							itemStyle: {//直线颜色
								normal: {
									color: "#d717ff",
									lineStyle: {
										color: "#d717ff"
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
			this.option.series[3].data=this.accelerator;
			
		},
		methods: {
			 // getChart(){				
// 				var index = 0; //播放所在下标
// 				var mTime = setInterval(()=> {
// 					orderTrend.dispatchAction({
// 						type: 'showTip',
// 						seriesIndex: 0,
// 						dataIndex: index
// 					});
// 					rental_price.dispatchAction({
// 						type: 'highlight',
// 						seriesIndex: 0,
// 						dataIndex: index
// 					});
// 					rental_price.dispatchAction({
// 						type: 'downplay',
// 						seriesIndex: 0,
// 						dataIndex: index-1
// 					});
// 					
// 					index++;
// 					if(index > this.contrast.length) {
// 						index = 0;
// 					}
// 				}, 1000);
			// },
	
		},
	}

</script>
<style scoped>
	.rental_price{
		/* border-right:2px solid #fff;
		border-bottom:2px solid #fff; */
		padding: 2% 0;
	}
	.rental_area{
		/* border-right:2px solid #fff; */
		/* padding: 2%; */
	}
	
</style>