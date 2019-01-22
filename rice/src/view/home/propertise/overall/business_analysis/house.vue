<template>
	<div>
		<div class="house echartall">
			<Charts :id="id1"  :option="option1" :height="height1" :width="width1"/>
			<Charts :id="id2"  :option="option2" :height="height2" :width="width2"/>
		</div>
	</div>

</template>
<script>	

	export default {
		name:"house",

		data() {
			return {
				id1:"house",
				id2:"residue",
				width1:"280px",
				height1:"260px",
				width2:"280px",
				height2:"210px",
				option1:{
					title : {
						text: '出租率分析',
						x:'left',
						textStyle: {
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
						orient: 'horizontal',
						// right: '50%',
						icon : 'circle',
						top:'70%',
						
						textStyle:{
						color:['#fff'],
							},
							formatter:  function(name){
								var data=[
								{value:335, name:'已租赁面积'},
								{value:310, name:'剩余租赁面积'},
								{value:234, name:'自用或其它'},
							];
								var total = 0;
								var target;
								for (var i = 0, l = data.length; i < l; i++) {
								total += data[i].value;
								if (data[i].name == name) {
									target = data[i].value;
									}
								}
								return name + '   |   ' + ((target/total)*100).toFixed(2) + '%'
							},
					},
					color:['#8600cc','#ff0000','#fdb800'],
					series: [
						{
							name:'访问来源',
							type:'pie',
							itemGap: 60,
							// radius : '60%',
							radius: ['40%', '60%'],
							center: ['50%', '40%'],//饼图的位置 
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
				option2:{
					title: {
								text: ''
								},
								series: [{
										type: 'liquidFill',// 水波图
										data: [ //可以有多个水波
										{
												value: 0.5,//所占比例 0-1
												itemStyle: {
														color: 'rgb(233,240,254,.8)',//水波的颜色
												}
										}],
										itemStyle: { color: "#fff" },//波线的阴影
										backgroundStyle :{color:'#2e95df'},//球状的背景颜色
										radius: '70%',//水波图的半径
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
													color: '#fff',
													fontSize: 12,
													
													// backgroundColor:"#f0f",
													fontStyle: 'normal',
													fontWeight: 'normal',
												
													
												}
										},
											
								}],
				},
			contrast:[
				{value:335, name:'已租赁面积'},
				{value:310, name:'剩余租赁面积'},
				{value:234, name:'自用或其它'},
			],
			
			}
		},
		mounted(){
		this.option1.series[0].data=this.contrast;
		},
		methods: {
			
	
		},
	}

</script>
<style scoped>
.house{
	margin-left: 2%;
}
	
</style>