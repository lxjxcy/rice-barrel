<template>
	<div class="financing ">
		<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
	</div>
	
</template>

<script>
	export default {
		name:"financing",
		data(){
			return{
				id:"financ",
				width:"100%",
				height:"250px",
				option:{
					title: {
							text: '企业融资情况',
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
						
						
						grid: {
							top:"20%",
							right: '4%',
							bottom: '1%',
							containLabel: true
						},
						xAxis: {
							type: 'value',
							show:false,
							boundaryGap: [0, 0.01],
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
						yAxis: {
							type: 'category',
							data: ['种子轮','天使轮','A轮','A+轮','B轮','C轮'],
							splitLine: {
								show: false
							}, //去除网格线
							axisLine: {
								show:false,
								lineStyle: {
									type: 'solid',
									color: '#fff',
									width: '0'
								}
							},
						},
						series: [
							{
								name: '种子轮',
								type: 'bar',
								barWidth: 14,
								data: [500, 989, 1134, 1270, 1344, 1630],
								itemStyle: {//直线颜色
										normal: {
											color: "#13eefb",
											barBorderRadius: [10, 10, 10, 10],//圆角
											lineStyle: {
												color: "#13eefb"
											}
										}
								},
							},
							
						]

				}
			}
		},
		mounted() {
		
		},
		methods:{
			
		}
	}
</script>

<style scoped>
.financing{
	padding: 2%;
}


</style>
