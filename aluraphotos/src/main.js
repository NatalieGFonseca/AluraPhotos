import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';
import './directives/transform';

/*CARREGA CSS DO BOOTSTRAP */
//import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

const router = new VueRouter ({ 
  routes, 
  //usa mode em history para usar a url da forma que defini
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
