
import VueRouter from "vue-router";
import Index from "../../nuxt_front/src/components/index";

export default new VueRouter({
    routes: [
        {
            path: '/',
            components: Index
        }   
    ],
    mode: 'history'
});