<template>
  <div class="home">
    <div class="introduction">
    </div>
    <BottomNavigation />
  </div>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation'

export default {
  name: 'Home',
  components: {
    BottomNavigation
  }
}
</script>

<style lang="scss">
.home {
  height: 100vh;
}

.introduction {
  height: 100vh;
  background: url("../assets/images/DSC_9409.jpg") center no-repeat;
  background-size: cover;
}
</style>
