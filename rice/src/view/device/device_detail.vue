<template>
	<div class="device-detail">
		 <x-header @on-click-back="goBack()" :left-options="{backText: '返回',preventGoBack:true}">{{deviceCode}}</x-header>
		<div class="img1 note" :style ="note">
			
		</div>
		<div>
			
			
		<div class="device-info">
			<dl v-for="item in deviceStatusList">
				
				<dt v-if="item.stateName=='temperature' ">{{item.stateValue}}℃</dt>
				<dt v-if="item.stateName=='humidity' ">{{item.stateValue}}%</dt>
				<dt v-if="item.stateName=='quality' ">{{item.stateValue/1000}}KG</dt>
				<dt v-if="item.stateName=='electric' ">{{item.stateValue/1000}}Ah</dt>
				<dt v-if="item.stateName=='signal_intensity' ">{{item.stateValue}}dBm</dt>
				<dd v-if="item.stateName=='temperature' ">温度</dd>
				<dd v-else-if="item.stateName=='humidity' ">湿度</dd>
				<dd v-else-if="item.stateName=='quality' ">重量</dd>
				<dd v-else-if="item.stateName=='electric' ">电量</dd>
				<dd v-else-if="item.stateName=='signal_intensity' ">信号强度</dd>
			</dl>
			
			
		</div>

		</div>

	</div>
	
</template>

<script>
	import {XHeader, Grid, GridItem,GroupTitle ,Divider, Card} from 'vux'

	export default {
		name:"device_detail",
		components: {
			 Grid,
			GridItem,
			XHeader,
			GroupTitle,Divider, Card
		},
		data(){

			return{
				deviceCode:"",
				deviceStatusList:[],
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
		},
		methods:{
				getDetaildata(){
					var that=this;
					var urls=that.$api.deviceInfo+"?deviceCode="+that.deviceCode
					that.axios.post(urls).then(res=>{
						if(res.data.code==0)
						that.deviceStatusList=res.data.data.status;
					
					})
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
	height:60px;
	width:60px;
	border-radius:50%;
	line-height: 60px;
	text-align: center;
	display: inline-block;
	border:2px solid #4686e5;
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
