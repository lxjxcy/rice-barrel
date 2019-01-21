<template>
	<div class="chinaMap">
		<div :style="{height:'500px',width:'100%'}" ref="myEchart"></div>
		
	</div>
	
</template>
<script>
	 import echarts from "echarts";
	 import '../../../../../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
	export default{
		name:"chinaMap",
		props: ["userJson"],
		data() {
		  return {
			chart: null,
			mydata:[],
		  };
		},
		mounted() {
		  this.chinaConfigure();
				

		},
		beforeDestroy() {
		  if (!this.chart) {
			return;
		  }
		  this.chart.dispose();
		  this.chart = null;
		},
		 methods: {
			 randomData() {
				return Math.round(Math.random()*500);
			},
      chinaConfigure() {
				
        console.log(this.userJson)
        let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置    
        window.onresize = myChart.resize;
        myChart.setOption({ // 进行相关配置
					// backgroundColor: '#FFFFFF',
		title: {
// 			text: '全国地图',
// 			subtext: '纯属虚构',
			x:'center'
		},
		tooltip : {
			trigger: 'item'
		},
// 		visualMap: {
// 			show : true,
// 			x: 'left',
// 			y: 'bottom',
// 			splitList: [ 
// 				{start: 500, end:600},{start: 400, end: 500},
// 				{start: 300, end: 400},{start: 200, end: 300},
// 				{start: 100, end: 200},{start: 0, end: 100},
// 			],
// 			color: ['#66CC33', '#00FF00', '#66FF33','#339900', '#33CC00', '#00CC00']
// 		},
		visualMap: {
						show : true,
						x: 'left',
						y: 'bottom',
            min: 0,
            max: 1000,
            text:['High','Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue','yellow', 'orangered']
            }
        },
		series: [{
			name: '随机数据',
			type: 'map',
			mapType: 'china', 
			roam: true,
			rippleEffect:{
			brushType:'stroke'
			},
			label: {
				normal: {
					show: false
				},
				emphasis: {
					show: false
				}
			},
			data:[
				{name: '北京',value: this.randomData() },{name: '天津',value: this.randomData() },
				{name: '上海',value: this.randomData() },{name: '重庆',value: this.randomData() },
				{name: '河北',value: this.randomData() },{name: '河南',value: this.randomData() },
				{name: '云南',value: this.randomData() },{name: '辽宁',value: this.randomData() },
				{name: '黑龙江',value: this.randomData() },{name: '湖南',value: this.randomData() },
				{name: '安徽',value: this.randomData() },{name: '山东',value: this.randomData() },
				{name: '新疆',value: this.randomData() },{name: '江苏',value: this.randomData() },
				{name: '浙江',value: this.randomData() },{name: '江西',value: this.randomData() },
				{name: '湖北',value: this.randomData() },{name: '广西',value: this.randomData() },
				{name: '甘肃',value: this.randomData() },{name: '山西',value: this.randomData() },
				{name: '内蒙古',value: this.randomData() },{name: '陕西',value: this.randomData() },
				{name: '吉林',value: this.randomData() },{name: '福建',value: this.randomData() },
				{name: '贵州',value: this.randomData() },{name: '广东',value: this.randomData() },
				{name: '青海',value: this.randomData() },{name: '西藏',value: this.randomData() },
				{name: '四川',value: this.randomData() },{name: '宁夏',value: this.randomData() },
				{name: '海南',value: this.randomData() },{name: '台湾',value: this.randomData() },
				{name: '香港',value: this.randomData() },{name: '澳门',value: this.randomData() }
			]
		}]

//           // backgroundColor: "#02AFDB",
//           tooltip: {}, // 鼠标移到图里面的浮动提示框
//           dataRange: {
//             show: false,
//             min: 0,
//             max: 1000,
//             text: ['High', 'Low'],
//             realtime: true,
//             calculable: true,
//             color: ['orangered', 'yellow', 'lightskyblue']
//           },
//           geo: { // 这个是重点配置区
//             map: 'china', // 表示中国地图
//             roam: true,
//             label: {
//               normal: {
//                 show: true, // 是否显示对应地名
//                 textStyle: {
//                   color: 'rgba(0,0,0,0.4)'
//                 }
//               }
//             },
// 						grid: {
// 							left: '3%',
// 							right: '4%',
// 							bottom: '3%',
// 							containLabel: true,
// 							
// 						},
// 						dataRange: {
// 							show: true,
// 							min: 0,
// 							max: 100,
// 							x: 'left',
// 							y: 'bottom',
// 							text: ['高', '低'], // 文本，默认为数值文本
// 							color: ['#00d970', '#b3ffa7', '#9ae1ff'],
// 							calculable: true,
// 								inRange: {
// 								color: ['#9ae1ff', '#b3ffa7', '#00d970'],
// 								}
// 							},
//             itemStyle: {
//               normal: {
//                 borderColor: 'rgba(0, 0, 0, 0.2)'
//               },
//               emphasis: {
//                 areaColor: null,
//                 shadowOffsetX: 0,
//                 shadowOffsetY: 0,
//                 shadowBlur: 20,
//                 borderWidth: 0,
//                 shadowColor: 'rgba(0, 0, 0, 0.5)'
//               }
//             }
//           },
//           series: [{
//               type: 'scatter',
//               coordinateSystem: 'geo' // 对应上方配置
//             },
//             {
//               name: '启动次数', // 浮动框的标题
//               type: 'map',
// 							mapType: 'HK',
//               geoIndex: 0,
//               data: [{
//                 "name": "浙江",
//                 "value": 599
//               }]
//             }
//           ]
        })
// 					var index = 0; //播放所在下标,使得tootip每隔三秒自动显示
// 					var mTime = setInterval(()=> {
// 						myChart.dispatchAction({
// 							type: 'showTip',
// 							seriesIndex: 0,
// 							dataIndex: index
// 						});
// 				
// 							myChart.dispatchAction({
// 									type: 'highlight',
// 									seriesIndex: 0,
// 									dataIndex: index
// 							});
// 							myChart.dispatchAction({
// 								type: 'downplay',
// 								seriesIndex: 0,
// 								dataIndex: index-1
// 							});
// 							index++;
// 							if (index > this.data.length) {
// 							
// 									index = 0;
// 							}
// 					}, 1000);
      }
    }
	}
</script>
<style scoped>
	
</style>
