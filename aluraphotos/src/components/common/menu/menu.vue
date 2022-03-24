<template>
    <nav>
      <ul class="menu">
        <li class="menu-item" v-for="route in routes" :key="route.id">
          <!-- Usado para link de modo a não recarregar a tela e sim apenas chamar 
            componentes já construídos ao inicar a app
          -->
            <router-link :to="route.path ? route.path : '/'" style="color: darkcyan; text-decoration: none">{{ route.title }}</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
    props: ['routes']
}
</script>


<style scoped>

* {
  font-family: 'Lobster', cursive;
  font-size: 30px;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
}

.menu {
  display: flex;
  gap:  32px;
}

.menu-item {
  font-weight: 600;
  font-size: 20px;
  color: darkcyan;
  list-style-type: none;
}

</style>