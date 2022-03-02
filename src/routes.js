// alurapic/src/routes.js

// const Cadastro = () => System.import('./components/cadastro/cadastro.vue')

import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/cadastro.vue';

export const routes = [

    { path: '/', name: 'home', component: Home, titulo: 'Home', menu: true },
    { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
    { path: '/cadastro/:id', name: 'altera', component: Cadastro},
    { path: '*', component: Home, menu: false}
];
