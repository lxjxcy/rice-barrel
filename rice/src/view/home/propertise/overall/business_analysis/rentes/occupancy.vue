<template>
	<div class="occupancy" >
		<Charts :id="id"  :option="option" :height="height" :width="width"/>
	</div>
</template>
<script>	

	export default {
		name:"occupancy",
		data() {
			return {
				id:"occupancys",
				width:"140px",
				height:"200px",
				value:20,
				name:"1号楼",
				pieData :[
					{
					data:[
						{value:335, name:'1号楼'},
						{value:655, name:''},
					],
					},
				],
				option:{
				    title : {
							text: '出租概率',
							x:'left',
							textStyle: {
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
						// data:["2号楼","2号楼"],
						textStyle:{
								color:['#fff'],
					   },
						  formatter:'1号楼'
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
				},
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
				this.option.series[0].data[0].value=this.value
				this.option.series[0].data[1].value=100-this.value
				this.option.series[0].data[0].name=this.name
			}
		},
	}

</script>
<style scoped>
	.employees{
		/* padding:2%; */
	}
	
</style>