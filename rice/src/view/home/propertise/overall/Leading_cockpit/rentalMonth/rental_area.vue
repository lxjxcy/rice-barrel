<template>
	<div class="rental_area">
		<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
	</div>
	
</template>

<script>
	export default {
		name:"rental_area",
		data(){
			return{
				id:"rental_area",
				width:"100%",
				height:"250px",
				xAxis:['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月',],
				data:[340, 532, 401, 222, 390, 120,45,340, 532, 401, 222, 390, 120,0],
				option:{
							title : {
								text: '凭租面积（万平方米）',
								x:'left',
								textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
									// fontFamily: 'Arial, Verdana, sans...',
									fontSize: 20,
								 backgroundColor:'rgba(128, 128, 128, 0.1)', //rgba设置透明度0.1
									fontStyle: 'normal',
									fontWeight: 'normal',
									color:"#fff"
								},
							},
							textStyle:{
								color:'#fff',
							},
							tooltip : {
								trigger: 'item',
								formatter: "{c}%)"
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
								axisLine: {
									lineStyle: {
										type: 'solid',
										color: '#30dbe3',
										width: '1'
									}
								},
								
								splitLine: {
									show: false
								}, //去除网格线
								splitArea: {
									show: false
								}, //保留网格区域
								data: this.xAxis,
							},
							yAxis: {
								// name: '(万人)',
								type: 'value',
								splitLine: {
									show: false
								}, //去除网格线
								axisLine: {
									rotate:45,
									lineStyle: {
										type: 'solid',
										color: '#30dbe3',
										width: '1'
									}
								},
								
							},
							series: [{
								data: this.data,
								type: 'line',
								areaStyle:{
                        },//区域颜色渐变

								itemStyle: {//直线颜色
									normal: {
										label : {
											show: false,
										},
										color: "#d717ff",
									
										lineStyle: {
											color: "#8600cc"
										}
									}
								},
							},
							{
									type: 'liquidFill',// 水波图
									data: [ //可以有多个水波
									{
											value: 0.5,//所占比例 0-1
											itemStyle: {
													color: 'rgb(233,240,254)',//水波的颜色
											}
									}],
									itemStyle: { color: "#fff" },//波线的阴影
									backgroundStyle :{color:'#fff'},//球状的背景颜色
									radius: '50%',//水波图的半径
									center:["70%",'40%'],
									outline: {
											show: false //true显示水波图上的文字
									},
									label: {
											show: true, //不能对水波图设置事件
											formatter: function () {
												return '剩余凭租面积20%';
											},
											position: ['50%', '30%'],
											textStyle: {
												color: '#000',
												fontSize: 12,
												fontStyle: 'normal',
												fontWeight: 'normal',
											
												
											}
									},
										
							}]
					
						}
			}
		},
		mounted(){

			this.option.xAxis.data=this.xAxis;
			this.option.series[0].data=this.data;
		},
		methods:{

		}
		
		
	}
</script>

<style scoped>
	.rental_area{
		height:250px;
		margin-top: 3%;
	}

</style>
