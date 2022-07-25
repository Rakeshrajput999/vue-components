import {createStore} from "vuex"
import  axios  from "axios"

const store = createStore({
  state: {
    user: null
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData)) 
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`    
    },
    CLEAR_USER_DATA () {
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    async register ({ commit ,state}, credentials) {
      return axios
        .post('//localhost:3001/register', credentials)
        .then(({ data }) => {
          console.log('user data is',data)
          commit('SET_USER_DATA', data)
          console.log (state.user)
       })
    },
     login ({ commit }, credentials) {
      return axios
        .post('//localhost:3001/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  getters: {
    loggedIn (state) {
      return !!state.user
    }
  }
})

export default store
