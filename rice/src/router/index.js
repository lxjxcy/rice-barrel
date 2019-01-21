import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import user_info from '@/view/userInfo/user_info'
import device_detail from '@/view/device/device_detail'
import device_list from '@/view/device/device_list'
import scanqrCode from '@/view/scanqrCode'
import deviceBind from '@/view/deviceBind'

import home from '@/view/home/home'
import overall from '@/view/home/propertise/overall/overall'


Vue.use(Router)

export default new Router({
	// mode: 'history',
  routes: [
		{
			path: '/scanqrCode',
			name: 'scanqrCode',
			 meta: {
        title: '扫一扫'
     },
			component: scanqrCode
		},
		{
			path: '/home',
			name: 'home',
			component: home,
			children:[
				{
					path:'/overall',
					name:'overall',
					component:overall
				}
			]
		},
		
		{
			path: '/deviceBind',
			name: 'deviceBind',
			meta: {
				title: '设备绑定'
		},
			component: deviceBind
		},
    {
      path: '/user_info',
      name: 'user_info',
			 meta: {
        title: '用户信息'
     },
      component: user_info
    },
		{
			path: '/device_detail',
			name: 'device_detail',
			 meta: {
        title: '米桶详情'
     },
			component: device_detail
		},
		{
			path: '/device_list',
			name: 'device_list',
			 meta: {
        title: '米桶列表'
     },
			component: device_list
		}
  ]
})
