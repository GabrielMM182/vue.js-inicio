<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos" :key="foto.titulo">
        <div class="painel">
          <h2 class="painel-titulo">{{ foto.titulo }}</h2>
          <div class="painel-conteudo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "fotos no vue",
      fotos: []
    };
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(lista_fotos => (this.fotos = lista_fotos));
  }
};
</script>

<style>
.corpo {
  font-family: Arial, Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.imagem-responsiva {
  width: 100%;
}


</style>
