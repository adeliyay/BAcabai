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
// import HasilPanen from './components/HasilPanen.vue'
// import Kemitraan from './components/Kemitraan.vue'
// import Tanam from './components/Tanam.vue'
import TransaksiPelanggan from './components/TransaksiPelanggan.vue'
import TransaksiPemasok from './components/TransaksiPemasok.vue'
import Dashboard from './components/Dashboard.vue'
import Lahan from './components/Lahan.vue'
import Riwayatpengeluaran from './components/RiwayatPengeluaran.vue'
import DaftarMitra from './components/DaftarMitra.vue'
import PermintaanMitra from './components/PermintaanMitra.vue'
import PengajuanMitra from './components/PengajuanMitra.vue'


let routes = [
    { path: '/dashboardscm', component: Dashboard},
    { path: '/praproduksi/lahan', component: Lahan},
    { path: '/praproduksi/riwayatpengeluaran', component: Riwayatpengeluaran},
    { path: '/transaksipemasok', component: TransaksiPemasok},
    { path: '/transaksipelanggan', component: TransaksiPelanggan},
    { path: '/mitra/daftarmitra', component: DaftarMitra},
    { path: '/mitra/permintaanmitra', component: PermintaanMitra},
    { path: '/mitra/pengajuanmitra', component: PengajuanMitra},
    
    // { path: '/hasilpanen', component: HasilPanen},
    // { path: '/kemitraan', component: Kemitraan},
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    router
});
