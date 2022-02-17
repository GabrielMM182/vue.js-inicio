<template>
  <div class="corpo">

    <meu-menu :routes="routes"> </meu-menu>

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import {routes} from './routes'
import Menu from './components/shared/menu/Menu.vue'

export default {

  components: {
    'meu-menu' : Menu
  },

  data() {

    return {

      routes

    }

  }

};
</script>

<style>
.corpo {
  font-family: Arial, Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.pagina-fade-enter, .pagina-fade-leave-active {
  opacity: 0
}

.pagina-fade-enter-active, .pagina-fade-leave-active {
  transition: opacity .4s
}

</style>
