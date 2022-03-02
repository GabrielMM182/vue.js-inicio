<template>
  <button @click="disparaAcao()" slot="botao" class="botao" :class="estiloBotao" :type="tipo">{{ rotulo }}</button>
</template>
<script>
export default {

  props: {

    tipo: {
      required: true,
      type: String
    },

    rotulo: {
      required: true,
      type: String
    },

    confirmacao: Boolean,
    estilo: String

  },

    methods: {

        disparaAcao() {

            if(this.confirmacao) {
                if(confirm('Confirma operação?')) {
                    this.$emit('botaoAtivado');
                }
                return;
            }
            this.$emit('botaoAtivado');
        }
    },

  computed: {

    estiloBotao() {

      if(this.estilo == 'padrao' || !this.estilo) return 'botao-padrao'
      if(this.estilo == 'perigo') return 'botao-perigo'

    }

  },

};
</script>

<style scoped lang="scss">

@import './Botao.scss'
</style>
