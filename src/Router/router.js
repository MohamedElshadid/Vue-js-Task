
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
 import Login from '../components/Auth/Login';
 import Register from '../components/Auth/Register';
 import Logout from '../components/Auth/Logout';
 import forum from '../components/pages/forum'
const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Register },
    { path: '/forum', component: forum,name:'forum' },
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang : false,
    mode : 'history'
})


export default router;