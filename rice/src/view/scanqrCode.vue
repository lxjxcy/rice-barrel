<template>

	<div>

	</div>
</template>

<script>
	import wxconfig from "../mixins/wxconfig.js"
	 import getUrlParam from "../mixins/getUrlParam.js"
	import wx from 'weixin-js-sdk';
	import {Toast,Loading,Confirm,TransferDom, } from 'vux'
	export default {
		name:"scanqrCode",
		directives: {
			TransferDom
		},
		components: {
			Toast ,
			Loading ,
			Confirm,
			TransferDom,
		},
		data(){
			 return{
				 openId:"",
				 code:"",
				 deviceCode:"",
			 }
			
		},
		mixins:[wxconfig,getUrlParam],
		created(){
			let that=this;	
				if (that.parseUrlData(window.location.href)) {
					if (that.parseUrlData(window.location.href).code) {
						that.code = that.parseUrlData(window.location.href).code							
						var param={
							code:that.code
						}						
						that.$api.getOpenId(param).then(res=>{
								if(res==""){
									wx.closeWindow()
									return;
								}
								that.openId=res;
								that.$store.commit("saveOpenId",res)
								that.validateCode(res)
						})
					}
				}	
				if(that.code!=""){
					return;
				}
				that.configWx()
		},
		mounted(){
			
		},
		methods: {
			//验证二维码
			validateCode(res){
				var that=this;
				var urls=that.$api.validateCode+"?deviceCode="+that.$store.state.deviceCode+"&appUserId="+res					
				that.$vux.loading.show({
					text: '加载中'
				})
				that.axios.post(urls).then(res=>{										
						if(res.data.code==0){
						that.$vux.loading.hide()
							that.$router.push({
								path: '/deviceBind',
								query: {
									deviceCode: that.$store.state.deviceCode,
									appUserId:that.openId,
								}
							})											
						}else{
						that.$vux.loading.hide()
							that.$vux.alert.show({
									title: '提示',
									content:  res.data.message,
								onShow () {
									
								},
								onHide () {
									wx.closeWindow()
								}
							})
						}
				})
				
			},
			// 扫一扫
			startsOperate(){
				let that=this;
				wx.scanQRCode({
					desc: 'scanQRCode desc',
					needResult: 1, // 默认为0，扫描结果由企业微信处理，1则直接返回扫描结果，
					scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
					success: function (res) {
						 // alert(res.resultStr)
						that.$store.commit('saveDeviceCode',res.resultStr)
						let local=window.location.href;
						window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx114fcd91bae75847&redirect_uri="+encodeURIComponent(local)+"&response_type=code&scope=snsapi_base#wechat_redirect";
					},
					error: function (res) {
						
					if (res.errMsg.indexOf('function_not_exist') > 0) {
						alert('版本过低请升级')
					}
					}
				});
			}


			

		},
				
	}
</script>

<style>

</style>
