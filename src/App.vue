<template>
  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <li v-for="foto of fotos" :key="foto.titulo">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "blink-182",
      fotos: []
    };
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
    .then(res => res.json())
    .then(lista_fotos => this.fotos = lista_fotos)

  }
}
</script>

<style>

</style>
