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
      fotos: [
        {
          url:
            "https://blognroll.com.br/wp-content/uploads/2020/11/blink-182-600x337.jpg",
          titulo: "blinkao"
        },
        {
          url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Blink182.jpg/1200px-Blink182.jpg",
          titulo: "brinkk"
        }
      ]
    };
  }
};
</script>
