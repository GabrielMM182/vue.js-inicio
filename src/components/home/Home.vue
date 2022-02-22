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
        <div>
          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva
              v-meu-transform:rotate.animate.reverse="15"
              :url="foto.url"
              :titulo="foto.titulo"
              slot="painel"

            />
            <!-- <meu-botao :tipo="button" :rotulo="remover" slot="botao"/> -->
          </meu-painel>
          <div>
            <meu-botao
              tipo="button"
              rotulo="REMOVER"
              slot="botao"
              @botaoAtivado="remove($event, foto)"
              :confirmacao="true"
              estilo="perigo"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/imagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },

  data() {
    return {
      titulo: "fotos no vue",
      fotos: [],
      filtro: ""
    };
  },

  methods: {
    remove($event, foto) {
      alert($event);
      alert("removendo a foto!" + foto.titulo);
    }
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
