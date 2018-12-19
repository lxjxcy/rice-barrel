import wx from 'weixin-js-sdk';
export default{

	data(){
		return{
			url:"",
		}
	},
	methods:{
		configWx(){
			 let that=this;
				that.url=location.href.split('#')[0]
			  let params = {
					url:that.url,
				}
			  that.$api.getToken(params).then((res) => {
					console.log(res)
				  if (res) {
						wx.config({
							beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
							debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
							appId: 'wx114fcd91bae75847', // 必填，企业微信的corpID
							timestamp:res.timestamp, // 必填，生成签名的时间戳
							nonceStr: res.nonceStr, // 必填，生成签名的随机串
							signature: res.signature,// 必填，签名，见附录1
							jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
						});
					wx.ready(function () {						
						that.startsOperate()//												
					});
		
					wx.error(function (res1) {
					  console.log(res1)
					  // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
					});
				  }
				}).catch((err) => {
				console.log(err)
			  });
		}

	},
}