<template>
  <b-modal 
        v-model="show"
        centered
        hide-header
        hide-footer
        class="register-form" 
        name="register-form" 
        :height="602" 
        :width="1200"
        id="register-form"
        dialog-class="register-form__dialog"
        content-class="register-form__content"
        body-class="register-form__body"
    >
    <h4>Регистрация <img @click="close()" src="/static/img/close.png" alt=""> </h4>
    <form>
      <label for="name" >Ваше имя</label>
      <div>
        <input id="name" type="text" v-model="name" required autofocus>
      </div>

      <label for="email" >Ваш e-mail</label>
      <div>
        <input id="email" type="email" v-model="email" required>
      </div>

      <label for="password">Придумайте пароль</label>
      <div>
        <input id="password" type="password" v-model="password" required>
      </div>

      <label for="password-confirm">Подтвердите пароль</label>
      <div>
        <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>

      <label for="password-confirm">Is this an administrator account?</label>
      <div>
        <select v-model="is_admin">
          <option value=1>Yes</option>
          <option value=0>No</option>
        </select>
      </div>

      <div>
        <button type="submit" @click="handleSubmit">
          Зарегистрироваться
        </button>
      </div>
    </form>
  </b-modal>
</template>

<script>

export default {
  props : ["nextUrl"],
  data(){
    return {
      name : "",
      email : "",
      password : "",
      password_confirmation : "",
      is_admin : null,
      show: false
    }
  },
  mounted(){
    console.log('hello')
  },
  methods : {
    handleSubmit(e) {
      e.preventDefault()

      if (this.password === this.password_confirmation && this.password.length > 0)
      {
        let url = "http://localhost:3000/register"
        if (this.is_admin != null || this.is_admin == 1) url = "http://localhost:3000/register-admin"
        this.$http.post(url, {
          name: this.name,
          email: this.email,
          password: this.password,
          is_admin: this.is_admin
        })
        .then(response => {
          localStorage.setItem('user', JSON.stringify(response.data.user))
          localStorage.setItem('jwt', response.data.token)

          if (localStorage.getItem('jwt') != null){
            this.$emit('loggedIn')
            if(this.$route.params.nextUrl != null){
              this.$router.push(this.$route.params.nextUrl)
            }
            else{
              this.$router.push('/')
            }
          }
        })
        .catch(error => {
          console.error(error);
        });
      } else {
        this.password = ""
        this.passwordConfirm = ""

        return alert("Passwords do not match")
      }
    },
    close(){
      this.$bvModal.hide('register-form')
    }
  }
}
</script>