<template>
	<div class="employees">
		<Charts :id="id" class="echartall" :option="option" :height="height" :width="width"/>
		<!-- <div id="myChart" class="echartall" :style="{width: '100%', height: '220px'}"></div> -->
		
	</div>
	
</template>
<script>	
	export default {
		name:"employees",
		data() {
			return {
				id:"employees",
				width:"100%",
				height:"220px",
				num:"249人",
				data:[
					{value:335, name:'博士'},
					{value:310, name:'硕士'},
					{value:234, name:'本科'},
					{value:135, name:'专科'},
				],
				option:{
				    title : {
						text: '',
						x:'center',
						 textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
							fontFamily: 'Arial, Verdana, sans...',
							fontSize: 24,
							backgroundColor:"#f0f",
							fontStyle: 'normal',
							fontWeight: 'normal',
							color:"#fff"
						},
					},
					color:['#8600cc','#d717ff','#5a52ff','#ba19ff'],
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						right: '10px',
						icon : 'circle',
						top:'20%',
						textStyle:{
						color:['#fff'],
					    },
						  formatter:  function(name){
							  var data=[
								{value:335, name:'博士'},
								{value:310, name:'硕士'},
								{value:234, name:'本科'},
								{value:135, name:'专科'},
								
							];
								var total = 0;
								var target;
								for (var i = 0, l = data.length; i < l; i++) {
								total += data[i].value;
								if (data[i].name == name) {
									target = data[i].value;
									}
								}
								return name + ' ' + ((target/total)*100).toFixed(2) + '%';
							},
					},
					textStyle:{
						color:'#fff',
					},
					series : [
						{
							name: '',
							type: 'pie',
							// radius: ['50%', '70%'],
							center: ['30%', '60%'],//饼图的位置 
							data:this.data,
							 textStyle:{//图例文字的样式
								color:'#fff',
								fontSize:16
							},
							
							
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								},
								normal : {
									
									label : {
										show : true   ,//隐藏标示文字，
										
									},
									labelLine : {
										show : true   //隐藏标示线
									}
								}
							},
							
						}]
				}
			}
		},
		mounted(){
			this.option.title.text='企业人数'+this.num;
			this.option.series[0].data=this.data;
		},
		methods: {

		},
	}

</script>
<style scoped>
	.employees{
		padding:1% 2%;
	}
	
</style>