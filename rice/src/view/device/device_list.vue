<template>
	<div class="device-list">
	   <load-more tip="设备列表" :show-loading="false" background-color="#fbf9fe"></load-more>
		  <x-table :cell-bordered="false" :content-bordered="true" style="background-color:#fff;">
			<thead>
			  <tr style="background-color: #F7F7F7">
				<th>设备</th>
				<th>状态</th>
				<th>操作</th>
			  </tr>
			</thead>
			<tbody>
			  <tr v-for="item in deviceList">
				<td>{{item.device}}</td>
				<td>
					<div v-if="item.state==1">开</div>
					<div v-else>关</div>
					</td>
				<td>
					<div v-if="item.bind==1"><span @click="bind(item.id)">绑定</span> </div>
					<div v-else>
						<span @click="removBind(item.id)" class="bind">解绑</span>
						<span @click="look(item.id)" class="bind">查看</span>
					</div>
				</td>
			  </tr>
			</tbody>
		  </x-table>
			
			
			<!-- 确认解除绑定框 -->
			  <div v-transfer-dom>
					<confirm
					v-model="srueShow"
					:close-on-confirm="false"
					title="提示"
					@on-confirm="onConfirmRemov">
						<p style="text-align:center;">您确认解除绑定么</p>
					</confirm>
				</div>
			<!-- 绑定成功框 -->
				<div v-transfer-dom>
					<confirm
					v-model="succeShow"
					:show-cancel-button="false"
					:close-on-confirm="false"
					title="提示"
					@on-confirm="onSuccess">
						<p style="text-align:center;">绑定成功</p>
					</confirm>
				</div>
		
	</div>
	
</template>

<script>
	import { XTable,LoadMore,Toast,Loading,Confirm,TransferDom,  } from 'vux'
	export default {
		name:"device_list",
		 directives: {
			TransferDom
		},
		 components: {
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
				deviceList:[
					{
						"id":1,
						"device":"米桶1号",
						"state":1,
						"bind":1,
					},
					{
						"id":2,
						"device":"米桶2号",
						"state":2,
						"bind":2,
					}	
				]
			}
		},
		methods: {
			//绑定
			bind(id) {
				this.$vux.loading.show({
					text: 'Loading'
					})
				setTimeout(() => {
					this.$vux.loading.hide()	
					this.succeShow=true
				}, 2000)
				
			},
			//解绑
			removBind(id){
				this.srueShow=true
			},
			look(id){
				this.$router.push("/device_detail");
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
