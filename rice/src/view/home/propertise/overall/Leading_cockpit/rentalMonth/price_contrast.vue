<template>
	<div>
		<div class="price_contrast">
			<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
		</div>
	</div>	
</template>
<script>	
	export default {
		name:"price_contrast",
		data() {
			return {
				id:"price_contrast",
				width:"100%",
				height:"200px",
				option:{
					title : {
						text: '租金收入比对',
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
						right: '2%',
						icon : 'circle',
						top:'30%',
						textStyle:{
						color:['#fff'],
							},
							formatter:  function(name){
								var data=[
								{value:335, name:'海聚中心'},
								{value:310, name:'孵化器'},
								{value:234, name:'生命科技中心'},
								{value:135, name:'加速器'},
							];
								var total = 0;
								var target;
								for (var i = 0, l = data.length; i < l; i++) {
								total += data[i].value;
								if (data[i].name == name) {
									target = data[i].value;
									}
								}
								return name + '   |   ' + ((target/total)*100).toFixed(2) + '%'+ '   |   ￥'+target;
							},
					},

					
					color:['#8600cc','#ff0000','#fdb800','#d717ff'],
					series: [
						{
							name:'访问来源',
							type:'pie',
							itemGap: 60,
							
							// radius : '60%',
							radius: ['40%', '70%'],
							center: ['20%', '60%'],//饼图的位置 
							avoidLabelOverlap: false,
							label: {
								normal: {
									 show: true,
									position: 'center', 
									  formatter:function (argument) {
											var html;
											html='租金收入\r\n\r\n'+'项目对比';
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
							data:this.contrast
						}
					],
					
				},
			contrast:[
				{value:335, name:'海聚中心'},
				{value:310, name:'孵化器'},
				{value:234, name:'生命科技中心'},
				{value:135, name:'加速器'},
			],
			
			}
		},
		mounted(){
			this.option.series[0].data=this.contrast;
		},
		methods: {
			
		},
	}

</script>
<style scoped>

	
</style>