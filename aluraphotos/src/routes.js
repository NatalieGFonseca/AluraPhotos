import Register from './components/register/register.vue';
import Home from './components/home/home.vue';

export const routes = [
    { path: '/' , name: 'home', component: Home , title: 'Home' , menu: true},
    { path: '/register' ,  name: 'register', component: Register , title: 'Register', menu: true},
    { path: '/register/:id', name:'update', component: Register , menu: false},
    { path: '*', component: Home, menu: false }
];