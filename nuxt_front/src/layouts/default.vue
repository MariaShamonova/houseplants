<template>
  <div class="default__container">
    <no-ssr>
      <app-logo />
    </no-ssr>
    <nuxt />
  </div>
</template>

<script>

import Vue from 'vue'
import Axios from 'axios'
Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

import router from '../router';

export default {
 
};
</script>

