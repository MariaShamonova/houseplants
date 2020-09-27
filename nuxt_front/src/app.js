import Vue from 'vue'
import index from './pages/index.vue'
import VueRouter from 'vue-router'
import {router} from './router/index.js'
import Meta from 'vue-meta'
 
Vue.use(VueRouter)
Vue.use(Meta, {
    ssrAppId: 1
});
 
export const createApp = context => {
    console.log(index)
    // Создаём экземпляр маршрутизатора
    const router = this.router;
    console.log("this is tourter from app " + router)
    const app = new Vue({
        // внедряем маршрутизатор в корневой экземпляр Vue
        router,
        render: h => h(index)
    })
    // возвращаем и приложение и маршрутизатор
    return {
        app,
        router
    }
}