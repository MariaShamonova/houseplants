<template>
  <div>
    <form class="block-form">
      <div class="block-form__title"><p>Войти на сайт</p></div>
      <div class="block-form__inputs">
          <div class="input__item">
              <label for="email" class="input__item__title">Логин</label>
              <input id="email" type="email" v-model="email" required autofocus>
          </div>
          <div class="input__item">
              <label for="password" class="input__item__title">Пароль</label>
              <input id="password" type="password" v-model="password" required>
          </div>
          
      </div>
      <div class="block-form__button">
          <button type="submit" @click="handleSubmit">Войти</button> 
          <b-button class="button-registr" v-b-modal.register-form>Зарегистрироваться</b-button>
      </div>
  </form>
    <register-form />
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.prototype.$http = axios;

  export default {
    data(){
      return {
        email : "",
        password : ""
      }
    },
    methods : {
      handleSubmit(e){
        e.preventDefault()
        console.log(axios.post('http://localhost:3000/login'))
        if (this.password.length > 0) {
          axios.post('http://localhost:3000/login', {
            email: this.email,
            password: this.password
          })
          .then(response => {
            console.log('hello')
            let is_admin = response.data.user.is_admin
           
            localStorage.setItem('user',JSON.stringify(response.data.user))
            localStorage.setItem('jwt',response.data.token)
            
            if (localStorage.getItem('jwt') != null){
                this.$emit('loggedIn')
                if(this.$route.params.nextUrl != null){
                this.$router.push(this.$route.params.nextUrl)
                }
                else {
                if(is_admin== 1){
                    this.$router.push('admin')
                }
                else {
                    this.$router.push('dashboard')
                }
                }
            }
          })
          .catch(function (error) {
            
            console.error(error.response);
          });
        }
      }
    }
  }
</script>