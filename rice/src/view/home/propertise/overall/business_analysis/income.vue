<template>
	<div>
		<div class="income">
			<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
		</div>
	
	</div>
	
</template>
<script>	

	export default {
		name:"income",

		data() {
			return {
			id:"income",
			width:"600px",
			height:"240px",
			xAxis:['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月',],
			yAxis:["0","150","300","450","600","750"],
			one:this.$store.state.house.one,
			two:this.$store.state.house.two,
			three:this.$store.state.house.three,
			four:this.$store.state.house.four,
			fif:this.$store.state.house.fif,
			sat:this.$store.state.house.sat,
			option:{
				     title: {
						text: '租金收入（万元）',
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
						data:['1号楼','2号楼','3号楼','4号楼','5号楼','6号楼'],
						right: '3%',
						top: '10%',
						textStyle:{
						color:['#8600cc','#ff0000','#fdb800','#d717ff','#fff',"#36ac4c"],
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
							name:'1号楼',
							type:'line',
							
							data:this.one,
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
							name:'2号楼',
							type:'line',
							// stack: '总量',
							data:this.two,
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
							name:'3号楼',
							type:'line',
							// stack: '总量',
							data:this.three,
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
							name:'4号楼',
							type:'line',
							// stack: '总量',
							data:this.four,
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
							name:'5号楼',
							type:'line',
							// stack: '总量',
							data:this.fif,
							itemStyle: {//直线颜色
								normal: {
									color: "#fff",
									lineStyle: {
										color: "#fff"
									}
								}
							},
						},
						{
							name:'6号楼',
							type:'line',
							// stack: '总量',
							data:this.sat,
							itemStyle: {//直线颜色
								normal: {
									color: "#1aa034",
									lineStyle: {
										color: "#1aa034"
									}
								}
							},
						},
					
					]
				}
			
			}
		},
		mounted(){
			this.getChart()
		},
		methods: {
			 getChart(){
				 console.log("aaaa")
				this.option.xAxis=this.xAxis;
				this.option.series[0].data=this.one;
				this.option.series[1].data=this.two
				this.option.series[2].data=this.three
				this.option.series[3].data=this.four
				this.option.series[4].data=this.fif;
				this.option.series[5].data=this.sat
				
			},
	
		},
	}

</script>
<style scoped>
.income{
	/* border-left: 2px solid #fff; */
	/* padding-top:3%; */
	padding-left: 2%;
	margin-bottom: 1.2%;
}
	
</style>