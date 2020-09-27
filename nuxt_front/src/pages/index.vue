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
import AppLogo from '../components/AppLogo.vue'
export default {
  components: {
    AppLogo
  }
}
</script>



