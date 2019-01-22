<template>
	<div>
		<div :id="id" :option="option" :style="style"></div>
	</div>
	
</template>
<script>
	import echarts from "echarts"
export default {
 name: "Charts",
 data() {
  return {
   //echarts实例
   chart: "" 
  };
 },
  props: {
    id: {
      type: String
    },
      //option 是图表的配置数据
    option: {
      type: Object
    },
	 width: {
	   type: String,
	   default: "500px"
	  },
	  height: {
	   type: String,
	   default: "300px"
	  },
  },
  
 computed: {
  style() {
   return {
    height: this.height,
    width: this.width
   };
  }
 },
 //检测option数据改变时自动刷新图表
 watch:{
	option: {
	   handler(newVal, oldVal) {
		if (this.chart) {
		 if (newVal) {
		  this.chart.setOption(newVal);
		 } else {
		  this.chart.setOption(oldVal);
		 }
		} else {
		 this.init(this.id,this.option);
		}
	   },
	   deep: true //对象内部属性的监听，关键。
	  }
 },
 mounted() {
  this.init(this.id,this.option);
 },
 methods: {
	 init(id,option){
		 var that=this;
		 let mycarts=document.getElementById(id)
		 that.chart=that.$echarts.init(mycarts)
		 that.chart.setOption(option)
		 
		 //图标自适应
		 window.addEventListener("resize",()=>{
			 that.chart.resize()
		 })
		 //tootip循环切换
		 if(id=="employees"){
			 	var index = 0; //播放所在下标,使得tootip每隔三秒自动显示
			 	var mTime = setInterval(()=> {
			 		that.chart.dispatchAction({
			 			type: 'showTip',//提示
			 			seriesIndex: 0,
			 			dataIndex: index
			 		});
			 
			 			that.chart.dispatchAction({
			 					type: 'highlight',//高亮
			 					seriesIndex: 0,
			 					dataIndex: index
			 			});
			 			that.chart.dispatchAction({
			 				type: 'downplay',
			 				seriesIndex: 0,
			 				dataIndex: index-1
			 			});
			 			index++;
			 			if (index > 3) {
			 					index = 0;
			 			}
			 	}, 1000);
		 }
	 }

 }
};
</script>