<template>
  <v-app>
    <Navigation />
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from '@/views/Home'
import Navigation from '@/components/Navigation'

export default {
  name: 'App',

  components: {
    Navigation,
    Home
  },

  data: () => ({
    //
  })
}
</script>
