import { createRouter, createWebHistory } from "vue-router";
import SignUp from '../views/SignUp.vue'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router