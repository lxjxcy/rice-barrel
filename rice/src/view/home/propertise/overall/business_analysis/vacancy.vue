<template>
	<div>
		 <div class="charts">
			<pie :id="id" :option="option"></pie>
		  </div>
	</div>
	
</template>

<script>
	import pie from "../../../../../components/chart.vue"
	export default {
		name:"vacancy",
		components:{
			pie
		},
		data() {
    return {
      id: 'test',
      option: {
        chart: {
          type: 'pie',//饼图
		   backgroundColor: 'rgba(0,0,0,0)',
           options3d: {
             enabled: true,//使用3d功能
             alpha: 60,//延y轴向内的倾斜角度
             beta: 0,  
           }
        },
        title: {
          text: '空置面积占比分析',//图表的标题文字,
            style: {
                color: '#fff',      //字体颜色
                "fontSize": "20px",   //字体大小
               
            }
        },

      plotOptions: {
        pie: {
          allowPointSelect: true,//每个扇块能否选中
          cursor: 'pointer',//鼠标指针
          depth: 25,//饼图的厚度
						dataLabels: {
						formatter: function () {
								// display only if larger than 1
								return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
										this.y + '%' : null;
						}
				},
//           dataLabels: {
//                   enabled: true,
//                     
//             }
        }
      },
        series: [
        {
          type: 'pie',
          name: '测试用1',//统一的前置词,非必须
		  size:'40%',
            			
		  center: ['50%', '20%'],//饼图的位置 
          data: [
            ['<300㎡',12],//模块名和所占比，也可以{name: '测试1',y: 12}
            ['300~500㎡',23],
            ['500~800㎡',19],
            ['>800㎡',29]
          ]
         }
        ]
      }
    }
  },
	}
</script>

<style scoped>
	.charts{
		width: 400px;
		
	}

</style>
