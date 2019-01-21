<template>
<div class="container echartall">
  <div :id="id" :option="option"></div>
</div>
</template>
<script>
import HighCharts from 'highcharts'
export default {
	
  props: {
    id: {
      type: String
    },
      //option 是图表的配置数据
    option: {
      type: Object
    }
  },
  mounted() {
    HighCharts.chart(this.id, this.option)
  }
}
</script>
 
<style scoped>
.container{
	height:250px;
	width:500px;
	margin-left: 2%;

}
</style>