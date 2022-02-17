<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="filtre por parte do titulo"
    />
    {{ filtro }}
    <ul class="lista-fotos">
      <li
        class="lista-fotos-item"
        v-for="foto of fotosComFiltro"
        :key="foto.titulo"
      >
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" slot="painel"></imagem-responsiva>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue"
import ImagemResponsiva from "../shared/imagem-responsiva/imagemResponsiva.vue"

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva" : ImagemResponsiva,
  },

  data() {
    return {
      titulo: "fotos no vue",
      fotos: [],
      filtro: ""
    };
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
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

.filtro {
  display: block;
  width: 100%;
}
</style>
