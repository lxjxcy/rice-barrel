<template>
	<div class="business_analysis">
		<div class="title">
			<ul>
				
				<li v-for="(item,index) in list"><span :class="ifselect==index+1?'yesSelect':'noSelect'">{{item}}</span></li>
			</ul>
		</div>
		<ul>
			<li class="l">
				<ul style="overflow: hidden;padding-top:2%;height:170px;margin-left: 5%;">
					<li class="l"><occupancy></occupancy></li>
					<li class="l"><occupancy2></occupancy2></li>
					<li class="l"><occupancy3></occupancy3></li>
					<li class="l"><occupancy4></occupancy4></li>
					<li class="l"><occupancy5></occupancy5></li>
					<li class="l"><occupancy6></occupancy6></li>		
				</ul>
				<ul>
					<li class="l">
						<div>
							<house></house>	
						</div>
					</li>
					<li class="l">
						<div>
							<income ref="incomeChild"></income>							
							<attract></attract>
						</div>
					</li>
					<li class="l">
						
					</li>
				</ul>
				
			</li>
			<li class="l">
				<div style="position: relative;top:-60px;width:500px">
					<vacancy></vacancy>
					<demand></demand>	
					<daynum></daynum>
				</div>
			</li>
			
		</ul> 
		
	</div>
	
</template>

<script>
	import { mapGetters, mapState,mapMutations,mapActions} from 'vuex'
	import occupancy from "./rentes/occupancy.vue"
	import occupancy2 from "./rentes/occupancy2.vue"
	import occupancy3 from "./rentes/occupancy3.vue"
	import occupancy4 from "./rentes/occupancy4.vue"
	import occupancy5 from "./rentes/occupancy5.vue"
	import occupancy6 from "./rentes/occupancy6.vue"
	import demand from "./demand.vue"
	import income from "./income.vue"
	import house from "./house.vue"
	import attract from "./attract.vue"
	import vacancy from "./vacancy.vue"
	import daynum from "./daynum.vue"
	export default {
		name:"business_analysis",
		components:{
			occupancy,
			occupancy2,
			occupancy3,
			occupancy4,
			occupancy5,
			occupancy6,
			demand,
			income,
			house,
			attract,
			vacancy,
			daynum
		
		},
		data(){
			return{
				list:["海聚中心","孵化器","生命科技中心","加速器"],
				ifselect:1,
				
			}
		},
		mounted(){
			console.log(this.$store.state)
			var classindex=1
			setInterval(()=>{
				classindex++;
				if(classindex==5){
					classindex=1
				}
			  this.getclass(classindex)
			},6000)
		},
		methods:{
			...mapActions(["increment"]),
			getclass(classindex){
				this.ifselect=classindex;
				if(classindex==2){
					this.increment()
					//循环切换数据
					this.$refs.incomeChild.getChart(); 
				}
			}
		}
		
	}
</script>

<style scoped>
	.title{
		color:#fff;
	}
	.title ul{
		display:flex ;
		margin-top:2% ;
		justify-content: flex-start;
		
	}
	.title li span{
		line-height: 40px;
		display: inline-block;
		border:2px solid #fff;
		padding:0 10px;
		margin: 0 5px;
		font-size: 18px;
	}
	.yesSelect{
		background: #00FFFF;
		color:#000
	}
	.noSelect{
		background: #0c2771;
	}
		

</style>
