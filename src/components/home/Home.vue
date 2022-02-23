<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
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
              @botaoAtivado="remove(foto)"
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
import FotoService from "../../service/FotoService.js";

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
      filtro: "",
      mensagem: ""
    };
  },

  methods: {
    remove(foto) {

      this.service.apaga(foto._id)
        .then(() => {
            let indice = this.fotos.indexOf(foto);
            this.fotos.splice(indice, 1);
            this.mensagem = 'Foto removida com sucesso'
          },
          err => {
            this.mensagem = 'Não foi possível remover a foto';
            console.log(err);
          }
        )

      // this.$http
      //   .delete(`v1/fotos/${foto._id}`)
      //   .then(
      //     () => {
      //       let indice = this.fotos.indexOf(foto); // acha a posição da foto na lista
      //       this.fotos.splice(indice, 1); // a instrução altera o array
      //       this.mensagem = 'Foto removida com sucesso'
      //     },
      //     err => {
      //       this.mensagem = 'Não foi possível remover a foto';
      //       console.log(err);
      //     }
      //   )
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

    this.service = new FotoService(this.$resource);

    this.service.lista()
      .then(lista_fotos => (this.fotos = lista_fotos, err => console.log(err)));


    // primeira maneira com http sem o service
    // this.$http.get('v1/fotos')
      // .then(res => res.json())
      // .then(lista_fotos => (this.fotos = lista_fotos, err => console.log(err)));

    // segunda maneira com resource sem o service
      // this.resource = this.$resource('v1/fotos{/id}');
      // this.resource.query()
      // .then(res => res.json())
      // .then(lista_fotos => (this.fotos = lista_fotos, err => console.log(err)));
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
