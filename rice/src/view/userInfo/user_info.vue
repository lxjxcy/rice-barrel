<template>
  <div>
	 <!-- <div class="img1 note" :style ="note">
		  
	  </div> -->
    <group>
      <cell title="账户" value="卢雪姣" is-link></cell>
	  <cell title="邮箱" value="2791958523@qq.com" is-link></cell>
	  <cell title="手机号" v-model="tel" is-link @click.native="setTel"></cell>
    </group>
	
	<div class="submit-footer">
		<x-button type="primary"  @click.native="save()">保存</x-button>
	</div>
	  <div v-transfer-dom>
		<confirm v-model="showModel"
		  show-input
		  ref="confirm5"
		  title="设置手机号"
		  :close-on-confirm="false"
		  @on-cancel="onCancel"
		  @on-confirm="onConfirm5"
		  @on-show="onShow5"
		  @on-hide="onHide">
		 </confirm>
    </div>
  </div>
</template>

<script>
import { Group, Cell , Confirm,TransferDom, Toast,Loading,XButton  } from 'vux'

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
	 XButton
  },
  
  data(){
	  return{
		  tel:"设置",
		  showModel:false,
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
  methods:{
	 setTel(){
		  this.showModel=true
	  },
	 onHide () {
      console.log('on hide')
    },
	 onCancel () {
      console.log('on cancel')
    },
	  onShow5 () {
      this.$refs.confirm5.setInputValue('')
    },
	save(){
		console.log("aaa")
		this.$vux.loading.show({
		  text: 'Loading'
		})
	   setTimeout(() => {
			this.$vux.loading.hide()
			 this.$vux.toast.show("设置成功")	
		  }, 2000)
	},
	  onConfirm5 (value) {
		  if(value==""){
			  this.$vux.toast.show({
				  text: "手机号不能为空",
				  type:"warn"
			  })
			  return
		  }
		  if(!(/^1(3|4|5|7|8)\d{9}$/.test(value))||!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(value)){
			  this.$vux.toast.show({
				  text: "手机号格式不正确",
				  type:"warn"
			  })
			  return
		  }
		  this.showModel=false
		  this.tel=value
	},
   
  }
}
</script>
<style>
	.img1{
		height: 200px;
		width:100%
		
	}
	.submit-footer{
		margin-top: 200px;
		
	}
</style>
