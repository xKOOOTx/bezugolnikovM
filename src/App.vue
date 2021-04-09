<template>
  <v-app>
    <vuescroll>
      <Navigation />
      <v-main>
        <Home />
      </v-main>
    </vuescroll>
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
