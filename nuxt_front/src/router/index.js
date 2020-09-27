import Router from 'vue-router'
import LoginForm from '../components/registration/LoginForm.vue'
import Register from '../components/registration/Register.vue'
import PersonalPage from '../pages/auth/personal/PersonalPage.vue'
import Admin from '../pages/auth/admin/Admin.vue'
import Vue from 'vue';


Vue.use(Router)
let router = new Router({
    mode: 'history',
      routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginForm,
            meta: { 
                guest: true
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: { 
                guest: true
            }
        },
        {
            path: '/dashboard',
            name: 'userboard',
            component: PersonalPage,
            meta: { 
                requiresAuth: true
            }
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            meta: { 
                requiresAuth: true,
                is_admin : true
            }
        },
      ]
})


router.beforeEach((to, from, next) => {
    console.log('hello from router')
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin == 1){
                    next()
                }
                else{
                    next({ name: 'userboard'})
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else{
            next({ name: 'userboard'})
        }
    }else {
        next() 
    }
})
     

 

export default router ;