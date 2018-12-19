<template>
  <div class="deviceBind">
		<div class="box">
			<div class="ricePic">

			
				<img src="../assets/rice2.jpg" alt="" style="widht:100%;height:100%;border-radius:50%;">
			</div>
		<!-- 	<group>
				<cell style="padding:0 20px" title="设备编号" v-model="deviceCode" ></cell>
				<x-input title="手机号码" type="tel" style="padding:0 20px;line-height:60px;" @on-blur="blurtel" v-model="mobile" placeholder="请输入手机号码"></x-input>
			</group> -->
		  <group>
     
      <x-input title="发送验证码" class="weui-vcode">
        <x-button slot="right" type="primary" mini>发送验证码</x-button>
      </x-input>
    </group>
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
			deviceCode:"",//设备编号
			appUserId:"",//openId
	  }
  },
	mounted(){
		 this.deviceCode=this.$route.query.deviceCode;
		 this.appUserId=this.$route.query.appUserId;
	},
  methods:{
// 	 setTel(){
// 		  this.showTel()
// 	  },
// 		setAddress(){
// 			this.showAddress()
// 		},
		//填写手机号
// 		showTel(){
//       const that = this
//       that.$vux.confirm.prompt('请输入手机号', {
//         title: '设置手机号',
// 				closeOnConfirm:false,
//         onShow () {
//          if(that.mobile=="请输入手机号"){
//          	that.$vux.confirm.setInputValue('')
//          }else{
//          	that.$vux.confirm.setInputValue(that.mobile)
//          }
//         },
//         onHide () {
//           console.log('prompt hide')
//         },
//         onCancel () {
//           console.log('prompt cancel')
//         },
//         onConfirm (msg) {
// 					if(msg==""){
// 						that.$vux.toast.text( "手机号不能为空")
// 						return
// 					}
// 					if(!(/^1(3|4|5|7|8)\d{9}$/.test(msg))||!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(msg)){
// 						that.$vux.toast.text( "手机号格式不正确")
// 						return
// 					}
// 					that.mobile=msg
// 					that.$vux.confirm.hide()
// 
//         }
//       })
//     },
		//填写地址
// 		showAddress(){
// 			const that = this
// 			that.$vux.confirm.prompt('请输入地址', {
// 				title: '设置地址',
// 				closeOnConfirm:false,
// 				onShow () {
// 					if(that.address=="请输入地址"){
// 						that.$vux.confirm.setInputValue('')
// 					}else{
// 						that.$vux.confirm.setInputValue(that.address)
// 					}
// 					
// 				},
// 				onHide () {
// 					console.log('prompt hide')
// 				},
// 				onCancel () {
// 					console.log('prompt cancel')
// 				},
// 				onConfirm (msg) {
// 					if(msg==""){
// 						that.$vux.toast.text( "地址不能为空")
// 						return
// 					}
// 				 that.address=msg
// 				 that.$vux.confirm.hide()
// 					
// 				}
// 			})
// 		},
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
	
	.deviceBind{
		background: #10AEFF;
		height:100%;
		width:100%;
		text-align: center;
/* 		width: 100%;
		height: 100%;
		background-image: url('../../assets/images/login-bg.jpg');
		background-size: cover;
		background-position: center; */
	}
	
	.box{
		width:75%;
		height:65%;
		display: inline-block;
		margin-top: 30%;
		background: rgba(255,255,255,0.3);
		border-radius:20px;
		padding: 5%;
	}
	.ricePic{
		width:60px;
		height:60px;
		border-radius:50%;
		border:1px solid #000;
		position: relative;
		top:-40px;
		left:40%;
	}
/* 	overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap; */

</style>
