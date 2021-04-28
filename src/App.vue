<template>
  <v-app class="app">
    <Navigation />
    <v-main>
      <router-view />
<!--      <Home />-->
    </v-main>
  </v-app>
</template>

<script>
// import Home from '@/views/Home'
import Navigation from '@/components/Navigation'

export default {
  name: 'App',

  components: {
    Navigation
    // Home
  },

  data: () => ({
    //
  })
}
</script>

<style lang="scss">
@import "assets/style/style";
@import "assets/style/variales";

.app {
  width: 100%;
  overflow-x: hidden;
}
</style>
