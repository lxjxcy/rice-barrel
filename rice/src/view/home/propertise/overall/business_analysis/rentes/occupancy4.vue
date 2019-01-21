<template>
	<div class="occupancy" >
		<div class="occupancys4"  :style="{width: '140px', height: '200px'}"></div>
		
	</div>
</template>
<script>	

	export default {
		name:"occupancy",
		data() {
			return {
				value:20,
				name:"4号楼",
				data:[
					{value:335, name:'1号楼'},
					{value:655, name:''},
				],
			}
		},
		mounted(){
			this.getChart();
		},
		methods: {
			 getChart(){
				 let occupancy = this.$echarts.init(document.querySelector(".occupancys4"))
				 window.onresize = occupancy.resize;
				 occupancy.setOption({
				    title : {
							// text: '出租概率',
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
					color:['#8600cc','#d717ff',],
					tooltip : {
						trigger: 'item',
					},
					legend: {
						orient: 'vertical',
						left: '10px',
						show:true,
						icon : 'circle',
						borderColor :'#fff',
						top:'23%',
						textStyle:{
						color:['#fff'],
					    },
						  formatter:this.name,
					},
					textStyle:{
						color:'#fff',
					},
				series: [{
            name: '',
            type: 'pie',
						radius: ['40%', '50%'],
            center: ['30%', '60%'],//饼图的位置 
            avoidLabelOverlap: false,
            hoverAnimation:false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    textStyle: {
                        fontSize: '24',
                        fontWeight: 'bold'
                    },
                    formatter:'{c}%'
                }
            },
            data: [{
                    value: this.value,
                    name: this.name,
                    label:{
                        normal:{
                            show:true
                        }
                    }
                 },
                {
                    value: 100-this.value,
                    name: ''
                }
            ]
					},
					]
				},);
			
			}
		},
	}

</script>
<style scoped>
	.employees{
		padding:2%;
	}
	
</style>