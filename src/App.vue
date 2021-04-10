<template>
  <v-app class="app">
    <Navigation />
    <v-main>
      <Home />
      <BottomNavigation />
    </v-main>
  </v-app>
</template>

<script>
import Home from '@/views/Home'
import Navigation from '@/components/Navigation'
import BottomNavigation from '@/components/BottomNavigation'

export default {
  name: 'App',

  components: {
    BottomNavigation,
    Navigation,
    Home
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
  overflow: hidden;
}
</style>
