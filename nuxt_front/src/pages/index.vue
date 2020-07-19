<template>
  <div class="applications">
    <div class="applications__wrapper">
      <div class="applications__menu">
        <no-ssr>
          <b-list-group>
            <b-list-group-item href="/auth/orders/week">Заявки понедельно</b-list-group-item>
          </b-list-group>
          <b-list-group>
            <b-list-group-item href="/auth/blanks/add">Создание бланков</b-list-group-item>
          </b-list-group>
        </no-ssr>
      </div>
      <div class="applications__page">

      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

