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
	*{
		padding:0;
		margin:0;
	}
	@font-face {
  font-family: 'iconfont';
  src: url('./font/iconfont.eot');
  src: url('./font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./font/iconfont.woff') format('woff'),
  url('./font/iconfont.ttf') format('truetype'),
  url('./font/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
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
ul li{
	list-style: none;
}
.l{
	float: left;
}
.r{
	float: right;
}
	.echartall{
		border: 2px solid hsla(0,0%,90%,.5);
		margin: 1px;
		/* padding: 2%; */
		box-sizing: border-box;
		border-radius: 10px;
	}
	td{
		color:#fff
	}
	table{
		color:#fff
	}
</style>
