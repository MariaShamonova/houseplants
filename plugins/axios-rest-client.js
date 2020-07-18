import axiosRestClient from 'axios-rest-client'
import JsCookie from 'js-cookie'

const token = JsCookie.get('token')

const api = axiosRestClient({
  baseUrl: process.env.NUXT_APP_API_URL || '/api/',
})

let headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

if (token || null) {
  headers = Object.assign({ 'Authorization': `Bearer ${token}` }, headers)
}

api.axios().defaults.withCredentials = true
api.axios().defaults.headers.common = headers

api.axios().interceptors.response.use((response) => {
    return response
  },
  async function (error) {
    let st = error.response && error.response.status || null
    if (st === 422) {
      return Promise.reject({
        status: 422,
        data: error.response.data.errors,
        message: `Ввод полей не корректен!`
      })
    } else if (st === 404) {
      return Promise.reject({
        status: st,
        message: `Старница не найдена`
      })
    } else if (st === 403){
      return Promise.reject({
        status: st,
        message: `Доступ запрещен`
      })
    } else {
      return Promise.reject({
        status: 500,
        message: `Ошибка сервера`
      })
    }
})

export const Api = api

export default (context, inject) => {
  inject('api', api)
}
