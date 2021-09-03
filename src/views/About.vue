<template>
  <div class="about" id="about">
    <Home />
    <div class="aboutMain">
      <p>Here should be some content about me.</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '@/views/Home'
import Footer from '@/components/Footer'

export default {
  name: 'Wedding',
  components: {
    Home,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/style';
@import '../assets/style/variales';

.aboutMain {
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: darken($greyBackground, .7);
  color: $white;
  font-weight: bold;
  font-size: 36px;
  & p {
    max-width: 900px;
  }
}
</style>
