<template>
	<div class="company echartall">
		<div>
			<div class="hradertitle">
				进驻企业
			</div>
			<table>
				<tr>
					<th><span>企业名称</span></th>
					<th><span>住进项目</span></th>
					<th><span>面积</span></th>
				</tr>
			</table>
			<vue-seamless-scroll :data="list" class="seamless-warp">
				<table class="item">
					<tr v-for="item in list">
						<td class="name" v-text="item.name"></td>
						<td class="project" v-text="item.project"></td>
						<td class="area" v-text="item.area"></td>
						
					</tr>
					
				</table>
				</vue-seamless-scroll>
				
			
		</div>
			


	</div>
	
</template>

<script>

	export default {
		name:"company",
		data() {
	    return {
	        animate:true,
	        list:[
	            {"name":"杭州绿城信息技术有限公司","project":"科技中心科技中心","area":"222平"},
				{"name":"杭州绿城信息技术有限公司","project":"科技中心科技中心","area":"222平"},
				{"name":"杭州绿城信息技术有限公司","project":"科技中心科技中心","area":"222平"},
				{"name":"杭州绿城信息技术有限公司","project":"科技中心科技中心","area":"222平"},
				{"name":"杭州绿城信息技术有限公司","project":"科技中心科技中心","area":"222平"},
				{"name":"杭州绿城信息技术有限公司","project":"科技中心科技中心","area":"222平"},
				{"name":"杭州绿城信息技术有限公司","project":"科技中心科技中心","area":"222平"},
				{"name":"杭州绿城信息技术有限公司","project":"科技中心科技中心","area":"222平"},
	            
	        ]
	    }

	  },
	created(){
//        setInterval(this.scroll,1000)
	},
  methods: {
       scroll(){
        let con1 = this.$refs.rollul;
        con1[0].style.marginTop='30px';
        this.animate=!this.animate;
        var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
        setTimeout(function(){
            that.list.push(that.list[0]);
            that.list.shift();
            con1[0].style.marginTop='0px';
            that.animate=!that.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
        },0)
  }
}

	}
</script>

<style scoped>
	.company{
		width:100%;
	}
	.hradertitle{
		font-size: 20px;
		font-weight: 400;
		line-height: 50px;
		color:#fff;
	}
	 .seamless-warp {
        height: 300px;
        overflow: hidden;
		line-height: 20px;
    }
	table{
		width:100%;
	}
	table tr th{
		width: 30%;
		text-align: center;
		line-height: 50px;
		color:#00FFFF;
		
	}
	 table tr th span{
		padding:0 5%;
		text-align: center;
		line-height: 24px;
		border-radius: 5%;
		display: inline-block;
		color:#000;
		background: #00FFFF;
		
	}
	table tr td{
		width: 30%;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}


</style>
