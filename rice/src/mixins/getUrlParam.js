
export default{
	data(){
		return{
			
		}
	},
	methods:{
		// 根据参数过滤数据得到参数值
		parseUrlData (url) {
			var data = {}
			if (url.split('?').length === 1) { // 无参数
				return false;
			} else {
				url.split('?')[1].split('&').forEach(function (item) {
					var arr
					item && (arr = item.split('='))
					arr && arr[0] && (data[arr[0]] = arr[1])
				})
				return data // data = {from:aaa,id:111}
			}
		},
	},
}