<template>
  <div v-if="hideDom">
	
		 <group>
      <x-input title="手机号码" type="tel" style="padding:20px 10px" @on-blur="blurtel" v-model="mobile" placeholder="请输入手机号码"></x-input>
			<x-input title="常用地址" style="padding:20px 10px" v-model="address" placeholder="请输入地址" ></x-input>
		</group>	
		
	
	<div class="submit-footer">
		<x-button type="primary"  @click.native="save()">保存</x-button>
	</div>

  </div>
</template>
<script>
import { Group, Cell ,  XInput,Confirm,TransferDom, Toast,Loading,XButton  } from 'vux'
import wx from 'weixin-js-sdk';
import getOpenId from "../../mixins/getOpenId.js"
export default {
	name:"user_info",
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
			hideDom:false,
		  mobile:"",//电话
			userId:"",
			openId:"",
			address:"",//地址
	  }
  },
	mixins:[getOpenId],
	mounted(){
	// this.getlist("oBq1y5yaKbhnQ86eIDHFUkOnuf7Q")
	},
  methods:{
		getlist(res){
			var that=this;
				var urls=that.$api.getUserInfo+"?appCode=gzh_xfmt&appUserId="+res	;
					that.axios.post(urls).then(res=>{
						if(res.data.code==0){
							that.mobile=res.data.data.mobile;
							that.userId=res.data.data.userId;
							that.address=res.data.data.address;
						}else{
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
			address:that.address,
			userId:that.userId,
			outUserId:that.openId
		}
		that.$vux.loading.show({
			text: 'Loading'
		})
		that.$api.modifyUser(param).then(res=>{
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
/* 	overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap; */

</style>
