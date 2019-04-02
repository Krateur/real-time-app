import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login/Login'
Vue.use(VueRouter);
const routes = [
    { path: '/login', component: Login }
];

const router = new VueRouter({
    routes, // short for `routes: routes`,
    mode: 'history'
});


export default router
