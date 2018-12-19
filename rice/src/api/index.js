import { post } from '../axiosconfig/'
import { get } from '../axiosconfig/'
export default {
	//获取签名
	getToken(params) {
		return get('/wx/account/getSignature', params)
	},
	// 获取openId
	getOpenId(params){
		return get('/wx/account/getOpenId', params)
	},
	//设备绑定
	devicetBind(params){
		return post('/wx/device/bindUser', params)
	},
	//设备列表
	bindDeviceslist:"/wx/device/bindDevices",
	
	//验证二维码
    validateCode:"/wx/device/validateCode",
	//获取用户信息
	 getUserInfo:"/wx/user/getUserInfo",
	 //设备详情
	 deviceInfo:"/wx/device/deviceInfo",
	//修改用户信息
	modifyUser(params){
		return post('/wx/user/modify', params)
	},

	
	
	

}