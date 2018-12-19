
	import wx from 'weixin-js-sdk';
export default{
	data(){
		return{
			
		}
	},
	created(){
		var that=this;
		if(that.$store.state.openId!=""){
			if(!that.parseUrlData(window.location.href)){
				that.hideDom=false;
				that.$vux.loading.show({
					text: '即将跳转公众号首页...',
					delay: 1e3
				})
				setTimeout(() => {
					that.$vux.loading.hide()
					wx.closeWindow()
				}, 1500)
				return;
			}
		}
	},
	mounted(){
		var that=this;
		if(that.$store.state.openId!=""){
			if(!that.parseUrlData(window.location.href)){
				return;
			}
			that.hideDom=true;
			that.openId=that.$store.state.openId;
			that.getlist(that.$store.state.openId)
		}else{
			if(that.parseUrlData(window.location.href)) {
				
				if (that.parseUrlData(window.location.href).code) {
					that.hideDom=true;
					that.code = that.parseUrlData(window.location.href).code;			
					var param={
						code:that.code
					}	
							
					that.$api.getOpenId(param).then(res=>{
							that.openId=res;
							that.$store.commit("saveOpenId",res)
							that.getlist(res)
					})
				}
			}else{
					let local=window.location.href;
					window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx114fcd91bae75847&redirect_uri="+encodeURIComponent(local)+"&response_type=code&scope=snsapi_base#wechat_redirect";				
					
			}
			
		} 
	
		
	},
	methods:{
	
		// 根据参数过滤数据得到参数值
		parseUrlData (url) {
			var data = {}
			if (url.split('?').length === 1) { // 无参数
				return false;
			} else {
				url.split('?')[1].split('&').forEach(function (item) {
					var arr
					item && (arr = item.split('='))
					arr && arr[0] && (data[arr[0]] = arr[1])
				})
				return data // data = {from:aaa,id:111}
			}
		},
	},
}