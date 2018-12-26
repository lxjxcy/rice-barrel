<template>
  <div class="deviceBind">
		<div class="box">
			<div class="ricePic">
				<img src="../assets/rice2.jpg" alt="" style="widht:100%;height:100%;border-radius:50%;">
			</div>
			<div>
				<p class="deviceId">设备编号:{{deviceCode}}</p>
			</div>
			<div class="inputInfo">
				<x-input title="手机号码" type="tel" style="padding:0 5px;line-height:50px;" @on-blur="blurtel" v-model="mobile" placeholder="请输入手机号码"></x-input>
			</div>
		<!-- 	<div class="inputInfo">
				<x-input placeholder="请输入验证码"  class="weui-vcode">
					<x-button slot="right" type="primary" mini @click.native="sendCode()" v-model="code">{{code}}</x-button>
				</x-input>
			</div> -->
			<div style="font-size: 12px;color:red;text-align: left;">*温馨提示：手机号必填！</div>

			<x-button type="primary" class="startbind" @click.native="save()">绑定</x-button>

		</div>
<!-- 		 <group>
			 <cell style="padding:0 20px" title="设备编号" v-model="deviceCode" ></cell>
      <x-input title="手机号码" type="tel" style="padding:0 20px;line-height:60px;" @on-blur="blurtel" v-model="mobile" placeholder="请输入手机号码"></x-input>
		</group> -->

   
		
		
<!-- 		<div style="font-size: 12px;color:red;margin-top: 20px;padding-left:20px">温馨提示：手机号必填！</div>
		
	
	<div class="submit-footer">
		<x-button type="primary"  @click.native="save()">绑定</x-button>
	</div> -->
	


  </div>
</template>

<script>
import { Group, Cell ,  XInput,Confirm,TransferDom, Toast,Loading,XButton  } from 'vux'
import wx from 'weixin-js-sdk';
export default {
	name:"deviceBind",
	  directives: {
    TransferDom
  },
  components: {
    Group,
    Cell,
	 Confirm,
	 Toast ,
	 Loading ,
	 XButton,
	  XInput
  },
  
  data(){
	  return{
		  mobile:"",//电话
			appCode:"gzh_xfmt", //应用编号：公众号传gzh_xfmt
		  showModel:true,
			// address:"",//地址
			deviceCode:"1111",//设备编号
			appUserId:"",//openId
			code:"获取验证码",
	  }
  },
	mounted(){
		 this.deviceCode=this.$route.query.deviceCode;
		 this.appUserId=this.$route.query.appUserId;
	},
  methods:{
		sendCode(){
			console.log("aa")
			var that=this;
			if(that.mobile==""){
				that.$vux.toast.text( "手机号不能为空")
				return
			}
				if(!(/^1(3|4|5|7|8)\d{9}$/.test(that.mobile))||!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(that.mobile)){
					that.$vux.toast.text( "手机号格式不正确")
					return
				}
			var sed=60;
			var id=setInterval(()=>{
				sed--;
				that.code=sed+"s";
				console.log(that.code)
				if(sed==0){
					clearInterval(id);
					that.code="请重新获取验证码"
				}
			},1000)
			
		},
		//失去焦点验证手机号
  blurtel(value) {
      	if(value==""){
      		this.$vux.toast.text( "手机号不能为空")
      		return
      	}
      		if(!(/^1(3|4|5|7|8)\d{9}$/.test(value))||!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(value)){
      			this.$vux.toast.text( "手机号格式不正确")
      			return
      	}
    }, 
		//绑定
	save(){
		var that=this;
		if(that.mobile==""){
			that.$vux.toast.text( "手机号不能为空")
			return
		}
			if(!(/^1(3|4|5|7|8)\d{9}$/.test(that.mobile))||!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(that.mobile)){
				that.$vux.toast.text( "手机号格式不正确")
				return
			}

		
		var param={
			mobile:that.mobile,
			// address:that.address,
			appCode:that.appCode,
			appUserId:that.appUserId,
			deviceCode:that.deviceCode,
		}
		console.log(param)
		that.$vux.loading.show({
			text: 'Loading'
		})
		that.$api.devicetBind(param).then(res=>{
			that.$vux.loading.hide()
			if(res.code==0){
				that.$vux.alert.show({
					title: '提示',
					content:  res.message,
					onShow () {
						
					},
					onHide () {
						wx.closeWindow()
					}
				})
				
			}else{
				that.$vux.toast.text(res.message)
				
			}
			
		})
	},  
  }
}
</script>
<style>
	.img1{
		height: 200px;
		width:100%
		
	}
	.address{
		height:50px;
		border-top:1px solid #ccc;
	}
	.submit-footer{
		position: fixed;
		bottom: 50px;
		width:100%;
	}
	.deviceId{
		line-height: 50px;
	}
	.startbind{
		position: absolute;
		bottom:-30px;
		
	}
	.deviceBind{
	/* 	background: #10AEFF;
		height:100%;
		width:100%; */
		text-align: center;
		width: 100%;
		height: 100%;
		background-image: url("../assets/bind.jpg");
		background-size: cover;
		background-position: center;
	}
	
	.box{
		width:75%;
		height:65%;
		display: inline-block;
		margin-top: 25%;
		background: rgba(255,255,255,0.5);
		border-radius:20px;
		padding: 5%;
		position: relative;
	}
	.ricePic{
		width:70px;
		height:70px;
		border-radius:50%;
		border:1px solid #000;
		position: absolute;
		top:-40px;
		left:38%;
	}
	.inputInfo{
		height:50px;
		border:1px solid #ccc;
		border-radius: 15px;
		background: #fff;
		margin-bottom: 10px;;
	}
/* 	overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap; */

</style>
