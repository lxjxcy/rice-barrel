<template>
	<div class="innovate">
		<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
	</div>
	
</template>

<script>
	
		export default {
			name:"innovate",
	
			data() {
				return {
					id:"intellectual",
					width:"100%",
					height:"230px",
				contrast:[
					{value:335, name:'软件著作权'},
					{value:122, name:'植物新品种'},
					{value:300, name:'集中电路布图'},
					{value:87, name:'使用新型'},
					{value:156, name:'外观设计'},
					{value:90, name:'其他'},
				],
				option:{
						title : {
							text: '企业创新',
							x:'left',
							textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
								// fontFamily: 'Arial, Verdana, sans...',
								fontSize: 20,
								backgroundColor:"#f0f",
								fontStyle: 'normal',
								fontWeight: 'normal',
								color:"#fff"
							},
						},
						grid: {
							left: '0',
							top:"2%"
							
							
						},
						tooltip: {
							trigger: 'item',
							formatter: "{a} <br/>{b}: {c} ({d}%)"
						},
						legend: {
							orient: 'vertical',
							right: '0%',
							icon : 'circle',
							top:'20%',
							textStyle:{
							color:['#fff','#fff','#fff','#fff'],
								},
								formatter:  function(name){
									var data=[
									{value:335, name:'软件著作权'},
									{value:122, name:'植物新品种'},
									{value:300, name:'集中电路布图'},
									{value:87, name:'使用新型'},
									{value:156, name:'外观设计'},
									{value:90, name:'其他'},
								];
									var total = 0;
									var target;
									for (var i = 0, l = data.length; i < l; i++) {
									total += data[i].value;
									if (data[i].name == name) {
										target = data[i].value;
										}
									}
									return name + '   |   ' + ((target/total)*100).toFixed(2) + '%';
								},
						},
	
						
						color:['#8600cc','#00a2ff','#00ce79','#ff0000','#ffd139','#ff5872'],
						series: [
							{
								name:'访问来源',
								type:'pie',
								itemGap: 70,
								
								// radius : '60%',
								radius: ['50%', '70%'],
								center: ['30%', '60%'],//饼图的位置 
								avoidLabelOverlap: false,
								label: {
									normal: {
										 show: true,
										position: 'center', 
										  formatter:function (argument) {
												var html;
												html='知识产权\r\n\r\n'+'123,224件';
												return html;
											},　
									},
									emphasis: {
										shadowBlur: 10,
										shadowOffsetX: 0,
										shadowColor: 'rgba(0, 0, 0, 0.5)'
									},
								},
								labelLine: {
									normal: {
										show: false
									}
								},
								data:[]
							}
						],
						
					}
				
				}
			},
			mounted(){
					this.option.series[0].data=this.contrast
			},
			methods: {
	
		
			},
		}
</script>

<style scoped>
	.innovate{
		padding: 2%;
		/* border-bottom: 1px solid #fff; */
	}

</style>
