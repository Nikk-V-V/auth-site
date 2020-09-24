import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    token: JSON.parse(localStorage.getItem('access_token')),
    refToken: JSON.parse(localStorage.getItem('refresh_token')),
    message: ''
  },
  mutations: {

  },
  actions: {
    async login({dispatch, commit}, {email, password}) {
      await axios.post(`http://142.93.134.108:1111/login?email=${email}&password=${password}`)
        .then(res => {
          localStorage.setItem('access_token', JSON.stringify(res.data.body['access_token']))
          localStorage.setItem('refresh_token', JSON.stringify(res.data.body['refresh_token']))
        })
        .catch(e => console.log(e))
    },
    async register({dispatch}, formData) {
      await (await axios.post('http://142.93.134.108:1111/sign_up', formData))
    },
    async getProfile() {
      await  axios({
        method: 'get',
        url: 'http://142.93.134.108:1111/me',
        headers: {
          "Authorization": `Bearer ${this.state.token}`
        }
      }).then(res => {
        if (res.data.statusCode === 401) this.dispatch('refresh')
        else this.state.message = res.data.body['message']
      })
    },
    async refresh() {
      await axios({
        method: 'post',
        url: 'http://142.93.134.108:1111/refresh',
        headers: {
          "Authorization": `Bearer ${this.state.refToken}`
        }
      }).then(res => {
        localStorage.setItem('access_token', JSON.stringify(res.data.body['access_token']))
        localStorage.setItem('refresh_token', JSON.stringify(res.data.body['refresh_token']))
      })
    },
  },
  modules: {

  }
})
