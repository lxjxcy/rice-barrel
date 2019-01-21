<template>
	<!-- :style ="note" -->
  <div id="home" class="img1 note" >
	<!-- <header>
		  <headercomp></headercomp>		 
	  </header> -->
	  <main>
		 <router-view/>

	  </main>  
  </div>
</template>
<script>
	
export default {
  name: 'home',
	data() {
		return {
			note: {
				backgroundImage: "url(" + require("../../assets/back2.jpg") + ") ",
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				// backgroundColor:"#fff"
			},
		}
	}

	
}
</script>

<style scoped>
	#home{
		/* height:100%; */
		display: flex;
		flex-direction:column;	
		height:750px;
		width:4640px;
		background: #151f72;
		overflow-y:hidden
	}
	header{
		height:50px;
	}
	main{
		flex: 1;
		/* background: #42B983; */
	}
</style>
