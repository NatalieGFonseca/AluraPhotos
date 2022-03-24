<template>
  <div class="painel">
    <!-- v-on === @ -->
    <h2 class="painel-title" @dblclick="visible = !visible">{{ title }}</h2>
    <transition name="painel-fade">
      <!-- Usa slot para jogar um dado dentro e desta forma não ser ignorado ao usar o component-->
      <div class="painel-content" v-show="visible">
        <slot> </slot>
      </div>
      <!-- especifica o nome do slot a ser usado -->
      <slot name="info"></slot>
    </transition>
  </div>
</template>

<script>
export default {
  //propriedades que o array aceita receber
  props: ["title"],

  data() {
    return {
      visible: true,
    };
  },
};
</script>

<!-- limita o estilo apenas ao componente quando utilizado o scoped -->
<style scoped>

* {
  font-family: 'Lobster', cursive;
}

.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: flex;
  flex-direction: column;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
  overflow: hidden;
  border-radius: 20px;
}

.painel .painel-title {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
  border-top: 20px;
}

.painel-fade-enter, .painel-fade-leave-active {
    opacity: 0;    
}

.painel-fade-enter-active, .painel-fade-leave-active {
    transition: opacity .4s;
}

/**
    fade-enter === estado atual
    fade-enter-active === quando o elemento está sendo incluído
    fade-leave-active === quando o elemento está sendo removido

*/

</style>
