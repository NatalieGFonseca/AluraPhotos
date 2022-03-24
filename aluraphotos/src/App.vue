<template>
  <div class="component">
    <my-menu :routes="routes"/>
    <transition name="page">
    <!-- Gerencia as rotas de modo a apresentá-las-->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import { routes } from './routes';
import Menu from './components/common/menu/menu.vue'

export default {

  components: {
    'my-menu' : Menu
  },

  data() {
    return {
      //só ira apresentar item do menu se o valor route.menu for true
      routes : routes.filter(route => route.menu)
    }
  }
  
};
</script>

<style scoped>

.component {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
}

.page-enter, .page-leave-active {
    opacity: 0;    
}

.page-enter-active, .page-leave-active {
    transition: opacity .1s;
}

</style>
