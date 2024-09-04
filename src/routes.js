import HomeNmae from './components/HomeName.vue'
import SignUp from './components/SignUp.vue'
import {createRouter , createWebHistory} from 'vue-router'
import LoginFirst from './components/LoginFirst.vue'
import AddResto from './components/AddResto.vue'
import UpdateResto from './components/UpdateResto.vue'

const routes=[
    {
        name:'SignUp',
        component: SignUp,
        path :'/Sign-up'
    },
    {
        name:'HomeName',
        component: HomeNmae,
        path :'/'
    },
    {
        name:'LoginFirst',
        component: LoginFirst,
        path :'/LoginFirst'
    },
    {
        name:'AddResto',
        component: AddResto,
        path :'/AddResto'
    },
    {
        name:'UpdateResto',
        component: UpdateResto,
        path :'/UpdateResto'
    },

]
const router=createRouter(
    {
        history:createWebHistory(),
        routes
    }
)
export default router 