import Vue from 'vue';
import AppLogo from "@/components/AppLogo";
import Catalog from "@/components/shop/Catalog";
import Footer from '@/components/Footer.vue';
import LoginForm from '@/components/registration/LoginForm';
import Register from './registration/Register'



Vue.component('app-logo', AppLogo);
Vue.component('app-catalog', Catalog);
Vue.component('app-footer', Footer);
Vue.component('login-form', LoginForm);
Vue.component('register-form', Register);