/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Import component
import HasilPanen from './components/HasilPanen.vue'
import Kemitraan from './components/Kemitraan.vue'
import TransaksiPelanggan from './components/TransaksiPelanggan.vue'
import TransaksiPemasok from './components/TransaksiPemasok.vue'
import Dashboard from './components/Dashboard.vue'

let routes = [
    { path: '/dashboardscm', component: Dashboard},
    { path: '/hasilpanen', component: HasilPanen},
    { path: '/kemitraan', component: Kemitraan},
    { path: '/transaksipelanggan', component: TransaksiPelanggan},
    { path: '/transaksipemasok', component: TransaksiPemasok},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    router
});
