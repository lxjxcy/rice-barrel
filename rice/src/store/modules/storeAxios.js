
// import api from '../../api/index.js'
const house={
	state: {
			 one:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210],
			 two:[220, 182, 191, 433, 567, 330, 310,220, 231, 111, 231, 456, 330, 345],
			 three:[220, 345, 191, 234, 111, 42, 45,220, 182, 567, 655, 732, 330, 233],
			 four:[220, 152, 191, 244, 230, 344, 310,220, 45, 191, 78, 290, 99, 310],
			 fif:[220, 333, 564, 244, 111, 341, 112,220, 45, 612, 45, 277, 87, 344],
			 sat:[220, 333, 564, 300, 456, 111, 112,232,444, 612, 45, 277, 87, 344],
			  num: 0,
	      add: 0,
				 count: 0,
	    // 新增waiting  状态
	    waiting: false,
	    // 额外需要增加的数字
	    anotherIncrement: 5,
			roomList:[],		
		 },
	mutations:{
			 // 存渠道
	    jia: function(state,num) {
	      // 加1
	      state.num=num+2;
	    },
	    INCREMENT: function(state) {
				console.log("ssss")
	      // state.count=1000;
				state.one=[20, 32, 1, 34, 90, 230, 210,120, 132, 101, 34, 90, 230, 210]
				state.two=[220, 182, 191, 433, 67, 330, 310,220, 31, 111, 231, 256, 30, 345]
				state.three=[220, 345, 191, 234, 111, 42, 45,220, 182, 67, 655, 732, 330, 233]
				state.four=[220, 152, 191, 44, 230, 344, 310,220, 45, 191, 78, 90, 99, 310]
				state.fif=[120, 133, 564, 44, 111, 341, 112,20, 45, 612, 45, 277, 87, 344]
				state.sat=[320, 233, 564, 100, 56, 111, 112,232,44, 612, 45, 277, 87, 44]
	    },
	    // // 减1
	    DECREMENT: function(state) {
	      state.count--;
	    },
	    INCREMENT_WITH_VALUE(state, value) {
	      state.count = state.count + value.intValue + value.anotherValue;
	    },
	    // // 显示和隐藏waiting
	    SHOW_WAITING_MESSAGE(state) {
	      state.waiting = true; 
	    },
	    HIDE_WAITING_MESSAGE(state) {
	      state.waiting = false;
	    },
			
			 GET_ROOM_LIST(state, data) {
				 console.log()
	      // state.roomList = data
	    },
			
	},
	  actions: {
// 		 async LOGIN({ commit }, value) {
// 			return new Promise((resolve, reject) => {
// 	        api.login(value).then(res => {
// 						commit("INCREMENT")
// 						if(res.code==0){
// 							resolve()
// 						}else{
// 							
// 							
// 						}
// 	          // const data = res.data
// 	          // commit('setToken', data.token)
// 	          
// 	        }).catch(err => {
// 	          reject(err)
// 	        })
// 	      })
// 			},
	    increment({commit}) {
	      commit("INCREMENT")
	    },
	    decrement({commit}) {
	      commit("DECREMENT")
	    },
			
			
			
			
	    incrementWithValue({
	      commit
	    }, value) {
	      commit("SHOW_WAITING_MESSAGE");
	
	      let intValue = parseInt(value.value)
	      let anotherValue = value.anotherValue
	      setTimeout(function() {
	        if (isNaN(intValue)) {
	          alert("Not an Interger")
	        } else {
	          commit("HIDE_WAITING_MESSAGE");
	          commit("INCREMENT_WITH_VALUE", {
	            intValue,
	            anotherValue
	          })
	        }
	      }, 2000)
	    }
	  },
	getters: {
	    getnum: (state) =>{
	      return state.num += 100
	    },
	    getadd:(state)=> {
	      return state.add += 200
	    },
	    countAnother:(state)=> {
	      return state.anotherIncrement
	    }
	  },
}


export default house 