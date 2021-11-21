import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    { path: '/', component: () => import(/* webpackChunkName: "js/elitlodgit/dashboard" */ '../components/dashboard'), name: 'dashboard' },
    { path: '/users', component: () => import(/* webpackChunkName: "js/elitlodgit/users" */ '../components/users/users/index.vue'), name: 'users' },
    { path: '/roles', component: () => import(/* webpackChunkName: "js/elitlodgit/roles" */ '../components/users/roles/index.vue'), name: 'roles' },
    { path: '/clients', component: () => import(/* webpackChunkName: "js/elitlodgit/clients" */ '../components/users/clients/index.vue'), name: 'clients' },
    { path: '/company', component: () => import(/* webpackChunkName: "js/elitlodgit/company" */ '../components/company/index.vue'), name: 'company' },
]

export default new VueRouter({ routes })
