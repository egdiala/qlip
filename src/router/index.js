import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        props:{default:true,connecter:true},
    },
    {
        path: '/private_sales',
        name: 'PrivateSales',
        component: () =>
            import ('../views/PrivateSales.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
