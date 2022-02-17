<template>
  <div>
    <nav>
      <ul>
        <li v-for="route in routes" :key="route.titulo">
          <router-link :to="route.path ? route.path : '/'">
            {{route.titulo}}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['routes']
  };
</script>

<style scoped></style>
