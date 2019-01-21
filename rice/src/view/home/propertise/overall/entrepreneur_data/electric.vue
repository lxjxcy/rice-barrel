<template>
	<div>
		<div class="electric">
			
			<ul style="overflow: hidden;">
				<li class="l">
					<businessOperation></businessOperation>
				</li>
				<li class="l">
					<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
				</li>
				
			</ul>
		</div>
		
		
	
	</div>
	
</template>
<script>	
	import businessOperation  from "./business_operation.vue"//企业经营
	export default {
		name:"electric",
		components:{
			businessOperation
		},
		data() {
			return {
				id:"electric",
				width:"580px",
				height:"250px",
				xAxis:['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月',],
				yAxis:["0","150","300","450","600","750"],
				clustering:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210],
				incubator:[220, 182, 191, 433, 567, 330, 310,220, 231, 111, 231, 456, 330, 345],
				technology:[220, 345, 191, 234, 111, 42, 45,220, 182, 567, 655, 732, 330, 233],
				accelerator:[220, 152, 191, 244, 230, 344, 310,220, 45, 191, 78, 290, 99, 310],
				outsourcing:[220, 333, 564, 244, 111, 341, 112,220, 45, 612, 45, 277, 87, 344],
				option:{
				     title: {
						text: '企业用电量（千度）',
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
						data:['生物医药','电子信息','新能源','文化创意','服务外包'],
						right: '3%',
						top: '10%',
						textStyle:{
						color:['#8600cc','#ff0000','#fdb800','#d717ff','#fff'],
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
							name:'生物医药',
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
							name:'电子信息',
							type:'line',
							// stack: '总量',
							data:this.incubator,
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
							name:'新能源',
							type:'line',
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
						{
							name:'文化创意',
							type:'line',
							// stack: '总量',
							data:this.accelerator,
							itemStyle: {//直线颜色
								normal: {
									color: "#d717ff",
									lineStyle: {
										color: "#d717ff"
									}
								}
							},
						},
						{
							name:'服务外包',
							type:'line',
							// stack: '总量',
							data:this.outsourcing,
							itemStyle: {//直线颜色
								normal: {
									color: "#fff",
									lineStyle: {
										color: "#fff"
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
			
	
		},
	}

</script>
<style scoped>
.electric{
	/* border-left: 2px solid #fff; */
	padding-top:5px;
	width:100%
	/* padding-left: 2%; */
}
	
</style>