import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import user_info from '@/view/userInfo/user_info'
import device_detail from '@/view/device/device_detail'
import device_list from '@/view/device/device_list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user_info',
      name: 'user_info',
      component: user_info
    },
		{
			path: '/device_detail',
			name: 'device_detail',
			component: device_detail
		},
		{
			path: '/device_list',
			name: 'device_list',
			component: device_list
		}
  ]
})
