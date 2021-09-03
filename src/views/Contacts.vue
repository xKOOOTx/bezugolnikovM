<template>
  <div class="contacts">
    <Home />
    <div class="contactsBlock">
      <p>Here should be contacts or feedback form not sure.
        Yeah definitely should be feedback form...</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '@/views/Home'
import Footer from '@/components/Footer'

export default {
  name: 'Contacts',
  components: {
    Home,
    Footer
  }
}
</script>

<style scoped lang="scss">
@import '../assets/style/style';
@import '../assets/style/variales';

.contactsBlock {
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $greyBackground;
  color: $white;
  font-weight: bold;
  font-size: 36px;
  & p {
    max-width: 900px;
  }
}
</style>
