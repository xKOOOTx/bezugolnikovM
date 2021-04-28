<template>
  <div class="gallery">
    some text
  </div>
</template>

<script>
export default {
  name: 'Gallery'
}
</script>

<style scoped lang="scss">
@import "./src/assets/style/style";
@import "./src/assets/style/variales";

.gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1000px;
  font-size: 58px;
  color: $white;
  background: $greyBackground;
}
</style>
