<template>
	<div class="device-list" v-if="hideDom">
				
		<!-- <div v-if="this.$store.state.showdetail"><deviceDetail></deviceDetail></div> -->
		<div>
		<!-- <span @click="look()" class="bind">查看</span> -->
	   <load-more tip="米桶列表" :show-loading="false" background-color="#fbf9fe"></load-more>
		  <x-table :cell-bordered="false" :content-bordered="true" style="background-color:#fff;">
			<thead>
			  <tr style="background-color: #F7F7F7">
					<th>序号</th>
				<th>编号</th>
				
				<th>操作</th>
			  </tr>
			</thead>
			<tbody>
			  <tr v-for="(item,index) in deviceList">
					<td>{{index+1}}</td>
				<td>{{item.deviceId}}</td>
				<td>
         <button @click="look(item.deviceId)" style="border-radius:5px;padding:2px 10px;color:#fff;background: #09BB07;border:none" class="bind">查看</button>				</td>
			  </tr>
			</tbody>
		  </x-table>
			<!-- 确认解除绑定框 -->
			<!--  <div v-transfer-dom>
					<confirm
					v-model="srueShow"
					:close-on-confirm="false"
					title="提示"
					@on-confirm="onConfirmRemov">
						<p style="text-align:center;">您确认解除绑定么</p>
					</confirm>
				</div> -->
			<!-- 绑定成功框 -->
			<!-- 	<div v-transfer-dom>
					<confirm
					v-model="succeShow"
					:show-cancel-button="false"
					:close-on-confirm="false"
					title="提示"
					@on-confirm="onSuccess">
						<p style="text-align:center;">绑定成功</p>
					</confirm>
				</div>
				 -->
				
		<!-- <div v-transfer-dom>
      <x-dialog v-model="show" class="dialog-demo" style="widht:100%;height:100%">
        <div class="img-box">
         <deviceDetail></deviceDetail>
        </div>
        <div @click="show=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div> -->
		</div>	
	</div>
	
</template>

<script>
	import { XTable,LoadMore,Toast,Loading,Confirm,TransferDom,XDialog} from 'vux'
	import getOpenId from "../../mixins/getOpenId.js"
	// import deviceDetail from "./device_detail.vue"
	import wx from 'weixin-js-sdk';
	export default {
		name:"device_list",
		 directives: {
			TransferDom
		},
		 components: {
			// deviceDetail,
			XDialog,
			XTable,
			LoadMore ,
			Toast,
			Loading, 
			Confirm,
			TransferDom,
		},
		data(){
			return{
				srueShow:false,
				succeShow:false,
				hideDom:false,
				
				show:false,
				code:'',
				deviceList:[]
			}
		},
		mixins:[getOpenId],
		mounted(){
		// getlist(res)
			
		},
		methods: {
			//获取设备列表
			getlist(res){
				var that=this;
				var urls=that.$api.bindDeviceslist+"?appUserId="+res					
				that.$vux.loading.show({
					text: '加载中'
				})
				that.axios.post(urls).then(res=>{										
						if(res.data.code==0){
							that.deviceList=res.data.data;
						that.$vux.loading.hide()										
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
			
			
			//绑定
			bind() {
				
// 				this.$vux.loading.show({
// 					text: 'Loading'
// 					})
// 				setTimeout(() => {
// 					this.$vux.loading.hide()	
// 					this.succeShow=true
// 				}, 2000)
				
			},
			//解绑
			removBind(id){
				this.srueShow=true
				
				
				
				
			},
			look(id){
				this.$router.push({
					path:"/device_detail",
					query:{
						deviceCode:id
					}
				});
			},
			//确认解除
			onConfirmRemov () {
				this.$vux.loading.show({
					text: 'Loading'
					})
				setTimeout(() => {
					this.$vux.loading.hide()
					this.$vux.toast.show("解除成功")	
					this.srueShow= false
				}, 2000)
			},
			//绑定成功
			onSuccess(){
				this.succeShow= false
				this.$router.push("/device_detail");
			}

			
		},
	}
</script>

<style>
	.bind{
		padding:0 5px;
	}

</style>
