<template>
	<div class="entrepreneur_data">
		<ul>
			<li class="l" style="width:410px;">
				<innovate></innovate>
				<employees></employees>
				<financing></financing>
			</li>
			<li class="l">
				<scale></scale>
				<electric></electric>
				
				<plannedProject></plannedProject>
				
			</li>
			<!-- <li class="l">
				<businessOperation></businessOperation>
			</li> -->
		</ul>
	</div>
	
</template>

<script>
	import innovate from "./innovate.vue"//知识产权
	import employees from "./employees.vue"//企业人数
	import financing from "./financing.vue"//企业融资情况
	import plannedProject from "./planned_project.vue"//国家计划
	import businessOperation  from "./business_operation.vue"//企业经营
	import scale from "./scale.vue"//规模分析
	import electric from "./electric.vue"
	export default {
		name:"entrepreneur_data",
		components:{
			innovate,
			employees,
			financing,
			plannedProject,
			electric,
			businessOperation,
			scale
		}
	}
</script>

<style>

</style>
