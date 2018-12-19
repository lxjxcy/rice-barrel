<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
 /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  padding:0;
  margin:0;
	height:100%;

  /* color: #2c3e50; */
	/* font-size: 0.12rem; */
  /* margin-top: 60px; */
}
.user .weui-cell{
	padding:0 10px !important;
}
.user .vux-label{
	/* width:30% !important; */
	padding-right: 30%;
}
.user .weui-cell__ft{
	width:60%;
	/* text-align: right; */
		overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}

.weui-input{
	/* text-align: right; */
}
.weui-dialog{
	widht:100%;
}
.img-box{
	width:100% !important;
	height:100% !important;
}
</style>
