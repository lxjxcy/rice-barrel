<template>
	<div class="scale">
		<ul style="overflow: hidden;">
			<li class="l  echartall" style="width:350px;">
				<Charts :id="id1"  :option="option1" :height="height" :width="width"/>
			</li>
			<li class="l" style="margin-left: 1%;">
				<aptitude></aptitude>
			</li>
			<li class="l  echartall" style="width:350px;margin-left: 1%;">
				<Charts :id="id2" :option="option2" :height="height" :width="width"/>
			</li>
		</ul>
		
	</div>
	
</template>

<script>
	import aptitude from "./aptitude.vue"
	export default {
		name:"scale",
		components:{
			aptitude
		},
		data(){
			return{
				id1:"scale1",
				id2:"scale2",
				width:"350px",
				height:"240px",
				option1:{
					 title : {
						text: '企业进驻数量类型占比top5',
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
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true
						},
						tooltip : {
							trigger: 'item',
							formatter: "{a} <br/>{b} : {c} ({d}%)"
						},

					calculable : true,
					color:['#8600cc','#ff0000','#fdb800','#d717ff','#fff'],
					series : [
							 {
							name:'半径模式',
							type:'pie',
							radius : [20, 80],
							center : ['50%', '50%'],
							roseType : 'radius',
							label: {
								 formatter: '{a}{d}%  ',
								 color:"#fff",
									emphasis: {
											show: true
									}
							},
							lableLine: {
									normal: {
											show: true
									},
									emphasis: {
											show: true
									}
							},
						 data:[
							{value:10, name:'生物医药'},
							{value:5, name:'电子信息'},
							{value:15, name:'新能源'},
							{value:25, name:'文化创意'},
							{value:20, name:'服务外包'},
						]
					},
					
						
					]
				},
				option2:{
								 title : {
									text: '企业员工人数类型占比top5',
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
									left: '3%',
									right: '4%',
									bottom: '3%',
									containLabel: true
								},
								tooltip : {
									trigger: 'item',
									formatter: "{a} <br/>{b} : {c} ({d}%)"
								},
			
							calculable : true,
							color:['#8600cc','#ff0000','#fdb800','#d717ff','#fff'],
							series : [
								   {
			            name:'半径模式',
			            type:'pie',
			            radius : [20, 80],
			            center : ['50%', '50%'],
			            roseType : 'radius',
			            label: {
			               formatter: '{a}{d}%  ',
// 										  backgroundColor: '#fff',
//                     borderColor: '#fff',
//                     borderWidth: 1,
										color:"#fff",
// 										padding:4,
//                     borderRadius: 2,
									
			                emphasis: {
			                    show: true
			                }
			            },
			            lableLine: {
			                normal: {
			                    show: true
			                },
			                emphasis: {
			                    show: true
			                }
			            },
			           data:[
									{value:10, name:'生物医药'},
									{value:5, name:'电子信息'},
									{value:15, name:'新能源'},
									{value:25, name:'文化创意'},
									{value:20, name:'服务外包'},
								]
			        },
								
									
					]
				}
				
			}
		},
		mounted(){

		},
		methods:{
			
		}
		
	}
</script>

<style scoped>
	.scale{
		margin-top: 1%;
		
	}

</style>
