<template>
 <div>
  <Chart :id="id" :option="option" :height="height" :width="width"/>
 </div>
</template>
<script>
import Chart from "./Chart";
export default {
 name: "parent",
 components: {
		Chart
 },
 data() {
	 return{
		 id: 'test',
		 height:'400px',
		 width:"400px",
		 data:[{value: 20, name: '核销率'}],
		 option:{
					  tooltip : {
							formatter: "{a} <br/>{b} : {c}%"
						},
						series: [
							{
								name: '业务指标',
								type: 'gauge',
								 min:0,
									max:100,
								 splitNumber: 4,
								  axisLine: {            // 坐标轴线  
// 							 lineStyle: {       // 属性lineStyle控制线条样式  
// 								 color: [[0.2, '#c23531'], [0.4, '#ff0'],[0.8, '#63869e'], [1, '#91c7ae']]
// 										}  
								},   
								detail: {
									formatter:'{value}%'},
								  axisLine: {            // 坐标轴线
				               lineStyle: {       // 属性lineStyle控制线条样式
				                   width: 10
				               }
				           },
// 							axisTick: {            // 坐标轴小标记
// 				               splitNumber: 3,     //缩在里面的标线的宽度
// 				               length:2,        // //缩在里面的标线的长度
// 				               lineStyle: {        // 属性lineStyle控制线条样式
// 				                   color: 'auto'
// 				               }
// 				           },
						 axisTick: {            // 坐标轴小标记
										show: false
								},
							  splitLine: {           // 分隔线
					               length: 20,         // 属性length控制线长
					               lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
					                   color: 'auto'
					               }
					           },
					           
					           //指针的宽度
					           pointer: {
					               width:2
					           },
								axisLabel: {
									textStyle: { // 属性lineStyle控制线条样式
															fontWeight: 'bolder',
															color: '#fff',
															shadowColor: '#fff', //默认透明
															shadowBlur: 10
													},

								},
								data: []
							}
						]
				}

}
},
	mounted(){
		this.option.series[0].data=this.data;
	},
	methods:{}
}
</script>