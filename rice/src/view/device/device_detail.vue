<template>
	<div class="device-detail">
		<div class="img1 note" :style ="note">
			
		</div>
		<div >
			<div class="deviceName">米桶一号</div>
			   <card >
				  <div slot="content" class="card-demo-flex card-demo-content01">
					<div class="vux-1px-r">
					  <span>1130</span>
					  <br/>
					   温度
					</div>
					<div class="vux-1px-r">
					  <span>15</span>
					  <br/>
					  湿度
					</div>
					<div class="vux-1px-r">
					  <span>0</span>
					  <br/>
					 状态
					</div>
					
				  </div>
				</card>
			
			<!-- <div class="detail">
				<dl>
					<dd>20</dd>
					<dt>温度</dt>
				</dl>
				<dl>
					<dd>40</dd>
					<dt>湿度</dt>
				</dl>
				<dl>
					<dd>开</dd>
					<dt>状态</dt>
				</dl>
			</div> -->
		</div>

	</div>
	
</template>

<script>
	import { Grid, GridItem,GroupTitle ,Divider, Card} from 'vux'

	export default {
		name:"device_detail",
		components: {
			 Grid,
			GridItem,
			GroupTitle,Divider, Card
		},
		data(){

			return{
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
.detail{
	display: flex;
}
.detail dl{
	width:30%;
	text-align: center;
}
.detail dl dd{
	color:red;
	text-align: center;
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
