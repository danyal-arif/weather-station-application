import { createRouter, createWebHistory } from "vue-router";
import SignUp from '../views/SignUp.vue'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import { useToast } from "vue-toastification";
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

router.beforeEach(async (to) => {
    const toast = useToast()
    if (to.name === 'home') {
        if (!localStorage.getItem('token')) {
            toast.error('You must be logged in to access this option!')
            return { name: 'signin' }
        }
    }
    if (to.name === 'signin') {
        localStorage.clear()
    }
  })

export default router