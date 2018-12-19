import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	 state: {
		 deviceCode:null,
// 		 showdetail:false,
// 		 showlist:true,
		 code:"",
		 openId:"",
		 userInfo:{
			 
		 },

	 },
	 mutations:{

		// 存tDeviceCode
		saveDeviceCode(state, deviceCode) {
			state.deviceCode = deviceCode;
			sessionStorage.setItem('deviceCode', deviceCode)
		},
		saveCode(state, code) {
			state.code = code;
			sessionStorage.setItem('code', code)
		},
		saveOpenId(state,openId){
			state.openId=openId;
			sessionStorage.setItem("openId",openId)	
		}	 
	 },
	 actions:{
		 
		 
	 },
	 getters:{
		 
	 }
})