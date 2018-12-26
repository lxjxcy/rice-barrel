<template>
	<div class="device-detail">
		<x-header @on-click-back="goBack()" :left-options="{backText: '返回',preventGoBack:true}">{{deviceCode}}</x-header>
		
		<scroller 
			:on-refresh="refresh"
			style="top:45px;"
			>
			<div class="img1 note" :style ="note">
				
			</div>
			<div>	
			<div class="device-info">
				<dl v-for="item in deviceStatusList">
					<dt v-if="item.stateName=='temperature' ">
						<x-circle
						:percent="parseInt(100)"
						:stroke-width="5"
						stroke-color="#04BE02">
						<span>{{item.stateValue}}℃</span>
						</x-circle>
					</dt>
					<dt v-if="item.stateName=='humidity' ">
						<x-circle
						:percent="parseInt(item.stateValue)"
						:stroke-width="5"
						:stroke-color="humidtycolor">
						<span>{{item.stateValue}}%</span>
						</x-circle>
					</dt>
					<dt v-if="item.stateName=='quality' ">
								<x-circle
								:percent="100*parseInt(item.stateValue)/10000"
								:stroke-width="5"
								stroke-color="#04BE02"
							
								> 
								<p>{{item.stateValue/1000}}KG</p>
								</x-circle>
					</dt>
					<dt v-if="item.stateName=='electric' ">
						<x-circle
						:percent="100*parseInt(item.stateValue)/5000"
						:stroke-width="5"
						stroke-color="#04BE02">
						<span>{{item.stateValue/1000}}Ah</span>
						</x-circle>
					</dt>
					<dt v-if="item.stateName=='signal_intensity' ">
						<x-circle
						:percent="parseInt(100)"
						:stroke-width="5"
						stroke-color="#04BE02"> 
						<span>{{item.stateValue}}dBm</span>
						</x-circle>
					</dt>
					<dd v-if="item.stateName=='temperature' ">
						<i class="iconfont">&#xe767;</i>温度
					</dd>
					<dd v-else-if="item.stateName=='humidity' ">
						<i class="iconfont">&#xe6f7;</i>湿度
					</dd>
					<dd v-else-if="item.stateName=='quality' ">
						<i class="iconfont">&#xe663;</i>重量
					</dd>
					<dd v-else-if="item.stateName=='electric' ">
						<i class="iconfont">&#xe612;</i>电量({{100*parseInt(item.stateValue)/5000}}%)
					</dd>
					<dd v-else-if="item.stateName=='signal_intensity' ">
						<i class="iconfont">&#xe64d;</i>信号强度
					</dd>
				</dl>
			</div>
			</div>
			

		</scroller>
		

	</div>
	
</template>

<script>
	import { XCircle, Range, Icon ,XHeader, Grid, GridItem,GroupTitle ,Divider, Card} from 'vux'

	export default {
		name:"device_detail",
		components: {
			 Grid,
			GridItem,
			XHeader,
			GroupTitle,
			Divider, 
			Card, 
			XCircle, 
			Range, 
			Icon 
		},
		data(){

			return{
				deviceCode:"",
				percent:20,
				humidtycolor:"#04BE02",
				deviceStatusList:[
				
				],
				note: {
				backgroundImage: "url(" + require("../../assets/userback.jpg") + ") ",
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				verticalAlign: "middle",
				backgroundColor:"#fff"
				},
			}
		},
		mounted(){
				this.deviceCode=this.$route.query.deviceCode;
					this.getDetaildata()
					// setTimeout(()=>{
									
// 						this.deviceStatusList=[{
// 									stateName:"temperature",
// 									stateValue:"35",
// 								},
// 								{
// 									stateName:"humidity",
// 									stateValue:"29",
// 								},
// 								{
// 									stateName:"quality",
// 									stateValue:"4000",
// 								},
// 								{
// 									stateName:"electric",
// 									stateValue:"4000",
// 								},
// 								{
// 									stateName:"signal_intensity",
// 									stateValue:"60",
// 								}
// 								]
					// },100)


		},
		methods:{
			refresh(done) {
			 this.getDetail(done)
      },
			getDetail(done){
					var that=this;
					that.reset();
					var urls=that.$api.deviceInfo+"?deviceCode="+that.deviceCode
					that.axios.post(urls).then(res=>{
						done()
						if(res.data.code==0)						
						setTimeout(()=>{
							that.deviceStatusList=res.data.data.status;
						},100)
					})
				},
				getDetaildata(){
					var that=this;
					that.reset();
					var urls=that.$api.deviceInfo+"?deviceCode="+that.deviceCode
					that.axios.post(urls).then(res=>{
						if(res.data.code==0)
						setTimeout(()=>{
							that.deviceStatusList=res.data.data.status;
						},100)
						
					})
				},
				reset(){
					this.deviceStatusList=[{
								stateName:"temperature",
								stateValue:"0",
							},
							{
								stateName:"humidity",
								stateValue:"0",
							},
							{
								stateName:"quality",
								stateValue:"0",
							},
							{
								stateName:"electric",
								stateValue:"0",
							},
							{
								stateName:"signal_intensity",
								stateValue:"0",
							}
							];
				},
			//返回列表
			goBack(){
				this.$router.push("/device_list")
				
			}
		}
		
	}
</script>

<style scoped>
	.img1{
		height: 150px;
		width:100%
		
	}
.deviceName{
	line-height: 50px;
	font-size: 28px;
}
.device-info{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	flex-direction: row;
}

.device-info dl{
	width:30%;
	text-align: center;
}
.device-info dl dt{
	/* background: red; */
	text-align: center;
	/* width:100%; */
	height:90px;
	width:90px;
	/* border-radius:50%; */
	line-height: 90px;
	text-align: center;
	display: inline-block;
	/* border:2px solid #4686e5; */
	color: #3bdee6;
}
.device-info dl dd{
	width:100%;
	/* background: #04BE02; */
	text-align: center;
	/* color: #909090; */
	-webkit-margin-start:0;
	line-height: 35px;
	font-size:14px;
}





</style>
<style scoped lang="less">
@import '~vux/src/styles/1px.less';

.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 24px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>
